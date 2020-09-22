const WebScraperRunnable = {
    games: [],

    fetchData(userid, gameid) {
        return new Promise((resolve, reject) => {
            fetch("https://stadia.google.com/profile/" + userid + "/detail/" + gameid)
            .then(response => response.text())
            .then(text => {
                const playData = text.match(new RegExp("\\[\\[\\[\"" + gameid + "\",.+\\n.+\\n,\\[([0-9]+)"));
                const achievementData = text.match(new RegExp("AF_initDataCallback\\(\\{ *key: *'ds:3'.*?data: *((.|\\n)*?), *sideChannel: *\\{\\}\\}\\)"));
                
                if(playData == null) return;
                
                const data = JSON.parse(achievementData[1])[0];
    
                const achievements = [];
                for(const e of data[5][0]) {
                    achievements.push({
                        name: e[0],
                        description: e[1],
                        value: e[3],
                        icon: e[8][0][0][1],
                        game: e[6],
                        id: e[7]
                    });
                }
    
                const user = {
                    name: data[5][3][0][0],
                    tag: data[5][3][0][1],
                    avatar: data[5][3][1][1]
                };
    
                resolve({
                    game: {
                        uuid: data[0][0],
                        name: data[0][1]
                    },
                    achievements,
                    user,
                    time: playData[1]
                });
            })
            .catch(reject);
        });
    },

    update(uuid) {
        if(uuid == null) return;

        const userId = document.querySelector('.ksZYgc.VGZcUb').getAttribute('data-player-id');
        WebScraperRunnable.fetchData(userId, uuid)
        .then(data => {
            const sandboxer = document.getElementById('web-scraper-sandboxer');
            sandboxer.setAttribute('data', JSON.stringify(data));
            sandboxer.click();

            let updated = localStorage.getItem('updatedGames');
            if(updated != null) {
                updated = JSON.parse(updated);
            }
            else {
                updated = {};
            }
            updated[uuid] = true;
            localStorage.setItem("updatedGames", JSON.stringify(updated));
        })
        .catch(e => console.error(e));
    },

    autoUpdate: false,
    autoUpdateInterval: 2 * 60 * 1000, // Two minutes
    setAutoUpdate(value) {
        this.autoUpdate = value;
        if(this.autoUpdate) {
            const loop = () => {
                let updated = localStorage.getItem('updatedGames');
                if(updated != null) {
                    updated = JSON.parse(updated);
                }
                else {
                    updated = {};
                }

                try {
                    if(this.games.length > 0) {
                        let hasUpdated = false;
                        for(let uuid of this.games) {
                            if(!updated.hasOwnProperty(uuid) || !updated[uuid]) {
                                this.update(uuid);
                                hasUpdated = true;
                                break;
                            }
                        }
    
                        if(!hasUpdated) {
                            this.setAutoUpdate(false);
                        }
                    }
                }
                catch(e) {
                    console.error(e);
                }

                if(this.autoUpdate) {
                    setTimeout(loop, this.autoUpdateInterval)
                }
            };
            loop();
        }
    }
}