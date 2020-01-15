
(() => {
    const loc = window.location.href;
    const pages = [
        'home',
        'store',
    ];

    setInterval(() => {
        if (window.location.href === loc) return;

        pages.forEach((page) => {
            if (window.location.href.includes(page)) {
                window.location.reload();
            }
        });
    }, 1000);
})();
