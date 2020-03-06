
console.log('[STADIA+] Injecting Clock');

window.addEventListener('load', () => {
    const container = document.querySelector('.hxhAyf');
    const el = document.createElement('span');

    let time;

    el.id = 'sidebar_clock';
    el.classList.add('stadiaplus_clock');
    container.prepend(el);

    function updateClock() {
        el.innerHTML = time;
    }

    setInterval(() => {
        if (!container) {
            return;
        }

        if (!el) {
            container.prepend(el);
        }
        
        time = new Date().toLocaleTimeString();

        window.requestAnimationFrame(updateClock);
    }, 1000);
});
