/* eslint-disable no-use-before-define */
console.log('[Stadia+] Injecting Store Filter');

/*
 *  Database Provided by u/nilicule on Reddit
 *  https://www.reddit.com/r/Stadia/comments/ep0koe/community_site_all_games_on_stadia_with/
 */
const databaseUrl = 'https://raw.githubusercontent.com/nilicule/StadiaGameDB/master/data/gamedb.json';

(() => {
    if (!window.location.pathname === '/store') {
        return;
    }

    const { chrome } = window;
    const searchIcon = chrome.runtime.getURL('images/icons/search.svg');

    let parent;
    const timer = setInterval(() => {
        parent = document.querySelector('.nWmtLd');
        if (parent.length === 0) return;

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
                <div class='search'>
                    <img class='stadiaplus_icon_search' src='${searchIcon}'>
                    <input type='text' placeholder='Search' name='query'>
                </div>
                <div class="stadiaplus_dropdown" id="tag-dropdown">
                    <select name="tags" multiple>
                        <p>tags</p>
                    </select>
                </div>
            </div>
            <div class='games'>
            </div>
        `;

        const input = container.querySelector('.nav input');
        const dropdown = container.querySelector('#tag-dropdown select');
        input.addEventListener('input', query);
        dropdown.addEventListener('change', query);

        const icon = container.querySelector('.nav .stadiaplus_icon_search');
        input.addEventListener('focusin', () => {
            icon.classList.add('focus');
        });
        input.addEventListener('focusout', () => {
            icon.classList.remove('focus');
        });

        createTags(games);
        updateGames(games);
    }

    function createTags(games) {
        const tags = [];
        const dropdown = document.querySelector('#tag-dropdown select');

        games.forEach((game) => {
            const gtags = game[2].split(', ');
            gtags.forEach((gtag) => {
                if (tags.includes(gtag.toLowerCase())) {
                    return;
                }
                tags.push(gtag.toLowerCase());

                const option = document.createElement('option');
                option.value = gtag;
                option.innerHTML = gtag.toLowerCase();

                dropdown.appendChild(option);
            });
        });

        // eslint-disable-next-line no-new
        new SlimSelect({
            select: '#tag-dropdown>select',
            showSearch: false,
            placeholder: 'Select a tag',
        });
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

    function query() {
        const gameContainer = document.querySelector('.stadiaplus_filterbar .games');
        const games = gameContainer.querySelectorAll('.stadiaplus_store_game');

        const tagSelect = document.querySelector('#tag-dropdown select');
        const input = document.querySelector('.stadiaplus_storefilter .nav input');
        const { value } = input;
        const tagSelectOptions = tagSelect.querySelectorAll('option:checked');
        const selectedTags = Array.from(tagSelectOptions).map((el) => el.value.toLowerCase());

        games.forEach((game) => {
            const name = game.querySelector('h5').innerText;
            const crumbs = Array.prototype.slice.call(game.querySelectorAll('.stadiaplus_crumb')).map((el) => el.innerText.toLowerCase());

            let hidden = value !== '' && !name.toLowerCase().startsWith(value.toLowerCase());

            console.log(selectedTags);
            if (selectedTags.length > 0) {
                selectedTags.forEach((tag) => {
                    if (!crumbs.includes(tag)) {
                        hidden = true;
                    }
                });
            } else if (value === '') hidden = true;

            game.classList.toggle('hidden', hidden);
        });
    }
})();

function httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', theUrl, false); // false for synchronous request
    xmlHttp.send('null');
    return xmlHttp;
}
