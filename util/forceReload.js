let loc = window.location.href;

/*let whitelist = [
    "stadia.google.com/"
];*/

(function() {
    setInterval(()=>{
        if(window.location.href != loc) {
            if(window.location.href.includes("home")) {
                window.location.reload();
            }
            loc = window.location.href;
            console.log(loc);
        }
    }, 1000)
})();