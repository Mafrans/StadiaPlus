console.log("[STADIA+] Injecting Codec Force");

(function() {
    document.addEventListener("DOMContentLoaded", function() {
        chrome.storage.local.get(['forceCodec'], function(result) {
            let val = result.forceCodec;
            console.log(result);
            
            let script = document.createElement("script");
            switch(val) {
                case "automatic":
                    script.innerHTML = `
                        localStorage.setItem("video_codec_implementation_by_codec_key", '');
                    `;
                case "vp9": 
                    script.innerHTML = `
                        localStorage.setItem("video_codec_implementation_by_codec_key", '{"vp9":"ExternalDecoder"}');
                    `;
                    break;
                case "h264":
                    script.innerHTML = `
                        localStorage.setItem("video_codec_implementation_by_codec_key", '{"h264":"ExternalDecoder", "vp9":"libvpx"}');
                    `;
                    break;
            }
            document.body.appendChild(script);
        });
    });

    setInterval(() => {
        let container = document.querySelector(".dSGvzf>div");
        let dropdown = document.querySelector("#codec_force_dropdown");
        if (!container || dropdown) {
            return;
        }

        let element = document.createElement("div");
        element.innerHTML = `
            <hr>
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
        element.id = "codec_force_dropdown";
        element.classList.add("stadiaplus_dropdown", "stadiaplus_force_codec");
        container.appendChild(element);
        
        chrome.storage.local.get(['forceCodec'], function(result) {
            let val = result.forceCodec;
            document.querySelector("#codec-dropdown").value = val;
        });

        console.log({ container, element });

        let btn = document.querySelector(".stadiaplus_force_codec .stadiaplus_button_small");
        btn.addEventListener("click", function (e) {
            let val = document.querySelector("#codec-dropdown").value;
            chrome.storage.local.set({'forceCodec': val});
            window.location.reload();
        });

        new SlimSelect({
            select: '#codec-dropdown',
            showSearch: false
        });
    }, 2000)

})();