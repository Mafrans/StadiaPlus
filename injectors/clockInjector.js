
console.log('[STADIA+] Injecting Clock');

window.addEventListener('load', () => {
    const container = document.querySelector('.hxhAyf');
    const el = document.createElement('span');

    let time;

    el.id = 'sidebar_clock';
    el.classList.add('stadiaplus_clock');
    container.prepend(el);

    function updateClock() {
	time = new Date().toLocaleTimeString();
        el.innerHTML = time;
    }

    if (!container) {
	return;
    }

    window.requestAnimationFrame(updateClock);

});
