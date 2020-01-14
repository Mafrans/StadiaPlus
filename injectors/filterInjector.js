/* eslint-disable no-use-before-define */
console.log('[STADIA+] Injecting Filters');

(() => {
    const { chrome } = window;
    const gameStorage = {};
    let sunStorage = false;
    let orderStorage;
    let recentlyPlayed = [];

    const iconVisible = chrome.runtime.getURL('images/icons/visibility.svg');
    const iconInvisible = chrome.runtime.getURL('images/icons/visibility_off.svg');

    const eyeTemplate = document.createElement('img');
    eyeTemplate.style.position = 'absolute';
    eyeTemplate.classList.add('stadiaplus_icon_visibility');
    eyeTemplate.src = iconVisible;

    if (window.location.href.includes('/home')) {
        window.addEventListener('load', () => {
            recentlyPlayed = Array.from(document.querySelectorAll('.GqLi4d'));

            injectImages();
            injectFilterBar();
            setInterval(createImages, 500);
            setInterval(injectFilterBar, 100);
            updateStorage();
        });
    }

    function updateStorage(callback) {
        chrome.storage.local.get(['games', 'sun', 'order'], (result) => {
            let resStorage = result.games;
            if (!resStorage) resStorage = {};

            sunStorage = result.sun;
            orderStorage = result.order;

            const sun = document.querySelector('.stadiaplus_icon_sun');
            if (sun) sun.classList.remove('enabled');

            const order = document.querySelector('.stadiaplus_filterbar>.order-dropdown>#dropdown');
            if (order) order.value = orderStorage;

            if (sunStorage) sun.classList.add('enabled');

            const elements = Array.from(document.querySelectorAll('.GqLi4d.QAAyWd'));

            elements.forEach((element) => {
                let game;
                const name = element.getAttribute('aria-label');

                if (resStorage[name]) {
                    game = resStorage[name];
                } else {
                    game = {
                        visible: element.style.display !== 'none',
                    };
                }

                gameStorage[name] = game;
                updateGame(name);
            });

            if (callback) {
                callback();
            }

            saveStorage();
        });
    }

    function saveStorage(callback) {
        chrome.storage.local.set({
            games: gameStorage,
            sun: sunStorage,
            order: orderStorage,
        }, callback);
    }

    function updateGame(name) {
        const tile = getTile(name);
        const sun = document.querySelector('.stadiaplus_filterbar>.stadiaplus_icon_sun');

        if (sun.classList.contains('enabled')) {
            tile.style.display = '';
        } else {
            tile.style.display = getFromStorage(name).visible ? '' : 'none';
        }
    }

    function injectImages() {
        if (!document.querySelector('.stadiaplus_game')) {
            // createImages();
            updateStorage();
        }

        setTimeout(injectImages, 100);
    }

    function getFromStorage(name) {
        return gameStorage[name];
    }

    function getTile(name) {
        return Array.from(document.querySelectorAll('.GqLi4d.QAAyWd'))
            .find((g) => g.getAttribute('aria-label') === name);
    }

    function createImages() {
        const gameTiles = document.querySelectorAll('.GqLi4d');

        gameTiles.forEach((element) => {
            const name = element.getAttribute('aria-label');
            element.classList.add('stadiaplus_game');
            // eslint-disable-next-line no-param-reassign
            element.style.position = 'relative';

            let eye = element.parentElement.querySelector(`.stadiaplus_icon_visibility[data-game-name="${name}"]`);

            if (element.style === 'none') return;

            if (!eye) {
                eye = eyeTemplate.cloneNode();
                eye.setAttribute('data-game-name', name);
                element.parentElement.insertBefore(eye, element);
                const game = getFromStorage(name);

                eye.src = game.visible ? iconVisible : iconInvisible;

                eye.addEventListener('click', () => {
                    game.visible = !game.visible;

                    gameStorage[name] = game;
                    eye.src = game.visible ? iconVisible : iconInvisible;
                    saveStorage(() => { updateStorage(createImages); });
                });
            }

            // It is important to always update the eyes' positions,
            // otherwise they cause issues with the filtering.
            eye.style.left = `${element.offsetLeft + element.clientWidth}px`;
            eye.style.top = `${element.offsetTop + element.clientHeight}px`;

            // eslint-disable-next-line
            if (!(element.offsetLeft
                + element.clientWidth
                + element.offsetTop
                + element.clientHeight)) {
                eye.style.display = 'none';
            } else {
                eye.style.display = '';
            }
        });
    }

    function injectFilterBar() {
        if (!document.querySelector('.stadiaplus_filterbar')) {
            const html = `
            <div class="stadiaplus_filterbar">
                <img class="stadiaplus_icon_filter" src="${chrome.runtime.getURL('images/icons/filter.svg')}">
                <div class="stadiaplus_dropdown">
                    <select name="order" id="dropdown">
                        <p>order</p>
                        <option value="played">Recently Played</option>
                        <option value="alphabetical">A-Z</option>
                        <option value="bought" disabled>Recently Bought</option>
                        <option value="random">Random</option>
                    </select>
                </div>
                <img class="stadiaplus_icon_sun" src="${chrome.runtime.getURL('images/icons/sun.svg')}">
            </div>
            `;

            const container = document.querySelector('.CVVXfc.YYy3Zb');
            const el = document.createElement('div');
            el.innerHTML = html;
            container.appendChild(el);

            // eslint-disable-next-line no-new
            new SlimSelect({
                select: '#dropdown',
                showSearch: false,
            });

            addFilterBarEvents();
            sortGames();
        }
    }

    function addFilterBarEvents() {
        const orderDropdown = document.querySelector('.stadiaplus_filterbar #dropdown');
        orderDropdown.addEventListener('change', () => {
            orderStorage = orderDropdown.value;
            saveStorage();
            sortGames();
        });


        const sun = document.querySelector('.stadiaplus_filterbar>.stadiaplus_icon_sun');
        sun.addEventListener('click', () => {
            sun.classList.toggle('enabled');
            sunStorage = !sunStorage;
            saveStorage();
            updateStorage();
        });
    }

    function sortGames() {
        const orderDropdown = document.querySelector('.stadiaplus_filterbar #dropdown');
        switch (orderDropdown.value) {
        case 'alphabetical':
            sortAlphabetical();
            break;
        case 'played':
            sortRecentlyPlayed();
            break;
        case 'random':
            sortRandom();
            break;
        default:
            break;
        }
    }

    function sortAlphabetical() {
        const elements = Array.from(document.querySelectorAll('.GqLi4d'));
        const parent = elements[0].parentElement;

        elements.forEach((el) => el.remove());

        elements.sort((a, b) => (a.getAttribute('aria-label') < b.getAttribute('aria-label') ? -1 : 1))
            .forEach((el) => parent.appendChild(el));
    }


    function sortRandom() {
        const elements = Array.from(document.querySelectorAll('.GqLi4d'));
        const parent = elements[0].parentElement;

        elements.forEach((el) => el.remove());

        elements.sort(() => Math.sign(Math.random() - 0.5))
            .forEach((el) => parent.appendChild(el));
    }

    function sortRecentlyPlayed() {
        const elements = Array.from(document.querySelectorAll('.GqLi4d'));
        const parent = elements[0].parentElement;

        elements.forEach((el) => el.remove());

        recentlyPlayed.forEach((el) => parent.appendChild(el));
    }
})();
