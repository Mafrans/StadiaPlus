console.log("[STADIA+] Injecting Clock");

window.addEventListener("load", () => {
    setInterval(() => {
        let container = document.querySelector(".hxhAyf");
        let clock = document.querySelector("#sidebar_clock");
        if(clock) {
            clock.innerHTML = new Date().toLocaleTimeString();
            return;
        }
        if(!container) {
            return;
        }
        let el = document.createElement("span");
        el.id = "sidebar_clock";
        el.innerHTML = new Date().toLocaleTimeString();
        el.classList.add("stadiaplus_clock");
        container.prepend(el);  
    }, 1000);
});