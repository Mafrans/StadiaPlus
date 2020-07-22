(function() {
    var origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        this.addEventListener('load', function() {
            const url = this.responseURL;
            const text = this.responseText;

            if(url.includes('sis9oc')) {
                // Achievements
                console.log('achievements')

                const lines = text.split('\n');
                for(const l of lines) {
                    if(l.includes('sis9oc')) { 
                        console.log('found it!')
                        console.log({l})
                        const arr = JSON.parse(JSON.parse(l + ']')[0][2])[0];
                        console.log({arr})
                        const achievements = [];
                        for(const e of arr) {
                            console.log({e})
                            achievements.push({
                                name: e[0],
                                description: e[1],
                                value: e[3],
                                icon: e[8][0][0][1],
                                game: e[6]
                            });
                        }

                        console.log({achievements})

                        const sandboxer = document.getElementById('web-scraper-sandboxer');

                        sandboxer.setAttribute('data-user', null); // Make sure to reset user data so it's not sent repeatedly to the server
                        sandboxer.setAttribute('data-time', null); // Make sure to reset play time so it's not sent repeatedly to the server
                        sandboxer.setAttribute('data-achievements', JSON.stringify(achievements));
                        sandboxer.click();
                    }
                }
            }
            else if(url.includes('D0Amud')) {
                // Name#XXXX
                console.log('Name#XXXX');

                const lines = text.split('\n');
                for(const l of lines) {
                    console.log(2, 0);
                    if(l.includes('D0Amud')) { 
                        const arr = JSON.parse(JSON.parse(l + ']')[0][2])[5];
                        console.log(2, 5);
                        console.log(arr);
                        console.log(2, 6);
                        const user = {
                            name: arr[0][0],
                            tag: arr[0][1],
                            avatar: arr[1][1]
                        };
                        console.log(2, 7);
                
                        console.log(url);
                        console.log(2, 8);
                        const _url = new URL(url);
                        console.log(2, 9);
                        console.log(2, 10);

                        const sandboxer = document.getElementById('web-scraper-sandboxer');
                        console.log(2, 11);

                        const game = getRenderer().querySelector('.Z5U6eb').getAttribute('data-main-app-id');
                        console.log({game});
                        fetchPlayData(arr[5], game)
                        .then(seconds => {
                            console.log('User has played', seconds, 'seconds');
                        
                            sandboxer.setAttribute('data-achievements', null); // Make sure to reset achievements so they're not sent repeatedly to the server
                            sandboxer.setAttribute('data-user', JSON.stringify(user));
                            sandboxer.setAttribute('data-time', JSON.stringify({game, time: seconds}));
                            sandboxer.click();
                        })
                        .catch(console.error)
                    }
                }
            }
        });
        origOpen.apply(this, arguments);
    };
})();

function fetchPlayData(userid, gameid) {
    console.log({ userid, gameid })
    return new Promise((resolve, reject) => {
        fetch("https://stadia.google.com/profile/" + userid + "/detail/" + gameid, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "sv-SE,sv;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "service-worker-navigation-preload": "true",
                "upgrade-insecure-requests": "1",
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        })
        .then(response => response.text())
        .then(text => {
            const matches = text.match(new RegExp("\\[\\[\\[\"" + gameid + "\",.+\\n.+\\n,\\[([0-9]+)"));
            resolve(matches[1]);
        })
        .catch(reject);
    });
}

function getRenderer() {
    const renderers = document.querySelectorAll('.lhsE4e>c-wiz');
    return Array.from(renderers).find(renderer => renderer.style.opacity !== '0');
}