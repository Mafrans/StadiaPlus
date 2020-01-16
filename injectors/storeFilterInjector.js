/* eslint-disable no-use-before-define */
console.log('[Stadia+] Injecting Store Filter');

/*
 *  Database Provided by u/nilicule on Reddit
 *  https://www.reddit.com/r/Stadia/comments/ep0koe/community_site_all_games_on_stadia_with/
 */
const databaseUrl = 'https://raw.githubusercontent.com/nilicule/StadiaGameDB/master/data/gamedb.json';

(() => {
    if (window.location.pathname !== '/store') {
        return;
    }

    const { chrome } = window;
    const searchIcon = chrome.runtime.getURL('images/icons/search.svg');

    let parent;
    const timer = setInterval(() => {
        parent = document.querySelector('.nWmtLd');
        if (parent.length === 0) return;
        if (window.location.pathname !== '/store') {
            clearInterval(timer);
        }

        createFilterBar();
        clearInterval(timer);
    }, 1000);

    function createFilterBar() {
        const response = httpGet(databaseUrl).responseText;
        const json = JSON.parse(response);
        const games = json.data;

        const container = document.createElement('div');

        parent.prepend(container);
        container.classList.add('stadiaplus_filterbar', 'stadiaplus_storefilter');
        container.innerHTML = `
            <div class='nav'>
                <img class='stadiaplus_icon_search' src='${searchIcon}'>
                <input type='text' placeholder='Search' name='query'>
            </div>
            <div class='games'>
            </div>
        `;

        const input = container.querySelector('.nav input');
        input.addEventListener('input', query);

        const icon = container.querySelector('.nav .stadiaplus_icon_search');
        input.addEventListener('focusin', () => {
            icon.classList.add('focus');
        });
        input.addEventListener('focusout', () => {
            icon.classList.remove('focus');
        });

        updateGames(games);
    }

    function updateGames(games) {
        const gameContainer = document.querySelector('.stadiaplus_filterbar .games');

        games.forEach((game) => {
            const img = game[0].match(/src='(.+)'/)[1];
            const url = game[0].match(/href='(.+)'><img/)[1];
            const name = game[1];

            const gameElement = document.createElement('a');
            gameContainer.appendChild(gameElement);

            let crumbs = '';
            const tags = game[2].split(', ');

            // eslint-disable-next-line no-restricted-syntax
            for (const tag of tags) {
                crumbs += `<span class='stadiaplus_crumb'>${tag.toLowerCase()}</span>`;
            }

            gameElement.classList.add('stadiaplus_store_game');
            gameElement.href = url;
            gameElement.innerHTML = `
                <img src='https://www.stadiagamedb.com/${img}'>
                <div class='vignette'></div>
                <div class='content'>
                    <h5>${name}</h5>
                    <div class='crumbs'>${crumbs}</div>
                </div>
            `;

            const cr = gameElement.querySelector('.crumbs');
            const maxHeight = cr.clientHeight;

            // It is important to only hide the game tile AFTER the max height has been recorded.
            gameElement.classList.add('hidden');

            console.log(maxHeight);
            gameElement.addEventListener('mouseover', () => {
                cr.style['max-height'] = `${maxHeight}px`;
            });

            gameElement.addEventListener('mouseout', () => {
                cr.style['max-height'] = 0;
                console.log('out');
            });

            cr.style['max-height'] = 0;
        });
    }

    function query(event) {
        const { value } = event.target;

        const gameContainer = document.querySelector('.stadiaplus_filterbar .games');
        const games = gameContainer.querySelectorAll('.stadiaplus_store_game');

        games.forEach((game) => {
            const name = game.querySelector('h5').innerText;
            game.classList.toggle('hidden', value === '' || !name.toLowerCase().startsWith(value.toLowerCase()));
        });
    }

    function httpGet(theUrl) {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', theUrl, false); // false for synchronous request
        xmlHttp.send('null');
        return xmlHttp;
    }
})();
