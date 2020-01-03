let loc = window.location.href;

(function() {
    setInterval(()=>{
        if(window.location.href != loc) {
            loc = window.location.href;
            window.location.reload();
        }
    }, 1000)
})();