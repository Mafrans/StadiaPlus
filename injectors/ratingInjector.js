console.log('[STADIA+] Injecting Ratings');


(() => {
    /*
     *  Database Provided by u/nilicule on Reddit
     *  https://www.reddit.com/r/Stadia/comments/ep0koe/community_site_all_games_on_stadia_with/
     */
    // const databaseUrl = 'https://raw.githubusercontent.com/nilicule/StadiaGameDB/master/data/gamedb.json';
    const maxStars = 5;
    const graceAmount = 10;

    const { location } = window;

    if (!location.pathname.startsWith('/store/details')) {
        return;
    }

    const dbFormatting = `<a href='${location.href}'>`;
    const response = httpGet(databaseUrl).responseText;
    const json = JSON.parse(response);
    const games = json.data;

    const matches = games.filter((a) => a[0].startsWith(dbFormatting));

    if (matches === 0) {
        return;
    }

    const rating = matches[0][6];
    const stars = getStars(rating);

    if (parseInt(rating, 10) > 0) {
        window.addEventListener('load', () => {
            const element = document.createElement('i');
            const nextSibling = document.querySelector('.ZzBJSb > .BMUnfd');
            nextSibling.parentNode.insertBefore(element, nextSibling);
            element.outerHTML = `
                <i class="stadiaplus_rating material-icons-extended">
                    ${stars.join(' ')}
    
                    <div class="T2oslb stadiaplus_rating-tooltip">
                        ${rating} / 100 (Metacritic)
                    </div>
                </i>
            `;
        });
    }

    function httpGet(theUrl) {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open('GET', theUrl, false); // false for synchronous request
        xmlHttp.send('null');
        return xmlHttp;
    }

    function getStars(_rating) {
        const outputStars = [];

        // Clamps the rating to values between 0 and 1,
        // where (0 + graceAmount) is 0 and (100 - graceAmount) is 1
        const clampedR = (_rating / 100) * (1 + (graceAmount / 100) * 2) - (graceAmount / 100);

        for (let i = 0, r = clampedR; i < maxStars; i += 1, r -= 1 / maxStars) {
            if (r >= 1 / maxStars) {
                outputStars.push('star');
            } else if (r >= 0) {
                outputStars.push('star_half');
            } else {
                outputStars.push('star_outline');
            }
        }

        return outputStars;
    }
})();
