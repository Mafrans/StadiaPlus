console.log('[STADIA+] Injecting Codec Force');


(() => {
    const { chrome, SlimSelect } = window;

    document.addEventListener('DOMContentLoaded', () => {
        chrome.storage.local.get(['forceCodec'], (result) => {
            const val = result.forceCodec;

            const script = document.createElement('script');
            switch (val) {
            case 'automatic':
                script.innerHTML = `
                    localStorage.setItem("video_codec_implementation_by_codec_key", '');
                `;
                break;
            case 'vp9':
                script.innerHTML = `
                    localStorage.setItem("video_codec_implementation_by_codec_key", '{"vp9":"ExternalDecoder"}');
                `;
                break;
            case 'h264':
                script.innerHTML = `
                    localStorage.setItem("video_codec_implementation_by_codec_key", '{"h264":"ExternalDecoder", "vp9":"libvpx"}');
                `;
                break;
            default:
                break;
            }
            document.body.appendChild(script);
        });
    });

    setInterval(() => {
        const container = document.querySelector('.codec-container');
        const dropdown = document.querySelector('#codec_force_dropdown');
        if (!container || dropdown) {
            return;
        }

        const element = document.createElement('div');
        element.innerHTML = `
            <p>Force Codec</p>
            <div class="stadiaplus_row">
                <select name="codec" id="codec-dropdown">
                <option value="automatic">Automatic</option>
                <option value="vp9">VP9</option>
                <option value="h264">H264</option>
                </select>
                <a class="stadiaplus_button_small">Apply</a>
            </div>
            <p class="stadiaplus_muted">Note: changing the codec will reload the page.</p>
        `;
        element.id = 'codec_force_dropdown';
        element.classList.add('stadiaplus_dropdown', 'stadiaplus_force_codec');
        container.appendChild(element);

        chrome.storage.local.get(['forceCodec'], (result) => {
            const val = result.forceCodec;
            document.querySelector('#codec-dropdown').value = val;
        });

        const btn = document.querySelector('.stadiaplus_force_codec .stadiaplus_button_small');
        btn.addEventListener('click', () => {
            const val = document.querySelector('#codec-dropdown').value;
            chrome.storage.local.set({ forceCodec: val });
            window.location.reload();
        });

        // eslint-disable-next-line no-new
        new SlimSelect({
            select: '#codec-dropdown',
            showSearch: false,
        });
    }, 2000);
})();
