
(function () {
    const loc = window.location.href;
    // let whitelist = [ "stadia.google.com/" ];

    setInterval(() => {
        if (window.location.href !== loc && window.location.href.includes('home')) {
            window.location.reload();
        }
    }, 1000);
}());
