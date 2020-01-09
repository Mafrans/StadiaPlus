function openPage(selector) {
    console.log(`opening ${selector}`);
    const pages = document.querySelectorAll('.page');

    const current = document.querySelector(selector);
    current.classList.add('active', 'animate');

    setTimeout(() => {
        pages.forEach((el) => {
            if (el !== current) {
                el.classList.remove('active', 'animate', 'inactive');
            }
        });
    }, 200);
}

function closePage() {
    const pages = document.querySelectorAll('.page');

    pages.forEach((el) => {
        el.classList.add('inactive');
        el.classList.remove('active', 'animate');
    });
}


(() => {
    document.querySelectorAll('.page').forEach((el) => {
        el.classList.forEach((cls) => {
            if (cls.startsWith('page-')) {
                const pname = cls.substr(5);

                document.querySelectorAll(`.link-${pname}`).forEach((link) => {
                    link.addEventListener('click', () => {
                        openPage(`.${cls}`);
                    });
                });
            }
        });
    });

    document.querySelectorAll('.link-close').forEach((link) => {
        link.addEventListener('click', () => {
            closePage();
        });
    });
})();
