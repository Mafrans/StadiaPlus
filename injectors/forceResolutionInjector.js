console.log('[STADIA+] Injecting Resolution Forcing');

(() => {
    const { chrome, SlimSelect } = window;

    const script = document.createElement('script');
    function prepareResolution() {
        chrome.storage.local.get(['forceResolution'], (result) => {
            const val = result.forceResolution;
            console.log('updating resolution to ', val);
            let width = 0;
            let height = 0;

            switch (val) {
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
        });
    }

    prepareResolution();

    // Hope and pray it prepares the resolution before the window loads.
    window.addEventListener('load', () => {
        document.body.appendChild(script);
        console.log(script.innerHTML);
    });

    setInterval(() => {
        const container = document.querySelector('.force-resolution-container');
        const dropdown = document.querySelector('#resolution_force_dropdown');
        if (!container || dropdown) {
            return;
        }

        const element = document.createElement('div');
        element.innerHTML = `
            <div class="stadiaplus_row">
                <select name="resolution" id="resolution-dropdown">
                <option value="automatic">Automatic</option>
                <option value="4K">4K</option>
                </select>
                <a class="stadiaplus_button_small">Apply</a>
            </div>
            
            <p class="stadiaplus_muted">Note: changing the resolution will reload the page.</p>
            <p class="stadiaplus_muted">Note: the set value is the maximum resolution Stadia will attempt to achieve. If your computer is not capable of rendering the resolution or it is not available with the current data usage option, it will not be displayed.</p>
        `;
        element.id = 'resolution_force_dropdown';
        element.classList.add('stadiaplus_dropdown', 'stadiaplus_force_resolution');
        container.appendChild(element);

        const btn = document.querySelector(
            '.stadiaplus_force_resolution .stadiaplus_button_small',
        );
        btn.addEventListener('click', () => {
            const val = document.querySelector('#resolution-dropdown').value;
            chrome.storage.local.set({ forceResolution: val });
            // window.location = 'https://stadia.google.com/home';
            window.location.reload();
        });

        // eslint-disable-next-line no-new
        const select = new SlimSelect({
            select: '#resolution-dropdown',
            showSearch: false,
        });

        chrome.storage.local.get(['forceResolution'], (result) => {
            const val = result.forceResolution;
            select.set(val);
        });
    }, 2000);
})();
