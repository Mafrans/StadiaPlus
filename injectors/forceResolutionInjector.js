console.log('[STADIA+] Injecting Resolution Forcing');

(() => {
    const { chrome, SlimSelect } = window;

    function updateResolution() {
        chrome.storage.local.get(['forceResolution'], (result) => {
            const val = result.forceCodec;
            let width = 0;
            let height = 0;

            const script = document.createElement('script');
            switch (val) {
            case '720p':
                width = 1280;
                height = 720;
                break;
            case '1080p':
                width = 1920;
                height = 1080;
                break;
            case '4K':
                width = 3840;
                height = 2160;
                break;
            default:
                return;
            }

            script.innerHTML = `
                Object.defineProperty(window.screen, 'availWidth', { value: ${width} });
                Object.defineProperty(window.screen, 'availHeight', { value: ${height} });
                Object.defineProperty(window.screen, 'width', { value: ${width} });
                Object.defineProperty(window.screen, 'height', { value: ${height} });
            `;

            document.body.appendChild(script);
        });
    }

    document.addEventListener('DOMContentLoaded', updateResolution);

    setInterval(() => {
        const container = document.querySelector('.force-resolution-container');
        const dropdown = document.querySelector('#resolution_force_dropdown');
        if (!container || dropdown) {
            return;
        }

        const element = document.createElement('div');
        element.innerHTML = `
            <p>Force Resolution</p>
            <div class="stadiaplus_row">
                <select name="resolution" id="resolution-dropdown">
                <option value="automatic">Automatic</option>
                <option value="720p">720p</option>
                <option value="1080p">1080p</option>
                <option value="4K">4K</option>
                </select>
                <a class="stadiaplus_button_small">Apply</a>
            </div>
            <p class="stadiaplus_muted">Note: there will be a short delay before your resolution is applied.</p>
            <p class="stadiaplus_muted">Note: the set value is the maximum resolution Stadia will attempt to achieve. If your computer is not capable of rendering the resolution or it is not available with the current data usage option, it will not be displayed.</p>
        `;
        element.id = 'resolution_force_dropdown';
        element.classList.add('stadiaplus_dropdown', 'stadiaplus_force_resolution');
        container.appendChild(element);

        chrome.storage.local.get(['forceResolution'], (result) => {
            const val = result.forceResolution;
            document.querySelector('#resolution-dropdown').value = val;
        });

        const btn = document.querySelector(
            '.stadiaplus_force_resolution .stadiaplus_button_small',
        );
        btn.addEventListener('click', () => {
            const val = document.querySelector('#resolution-dropdown').value;
            chrome.storage.local.set({ forceResolution: val }, updateResolution);
        });

        // eslint-disable-next-line no-new
        new SlimSelect({
            select: '#resolution-dropdown',
            showSearch: false,
        });
    }, 2000);
})();
