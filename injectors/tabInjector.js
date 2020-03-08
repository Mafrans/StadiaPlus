(() => {
    const { UIComponent, UIButton, chrome } = window;
    window.addEventListener('load', () => {
        const component = new UIComponent(
            'Stadia+',
            `
                <i 
                    class="stadiaplus_muted" 
                    style="margin-top: 1rem; margin-bottom: 5rem; display: block"
                >
                    Don't look here, look below!
                </i>
                
                <p>Network Overlay</p>
                <div class="overlay-toggle-container"></div>
                <hr />
                
                <p>Force Codec</p>
                <div class="codec-container"></div>
                <hr />
                
                <p>Force Resolution</p>
                <div class="force-resolution-container"></div>
            `,
        );

        const icon = chrome.runtime.getURL('images/icons/visibility.svg');
        const button = new UIButton(icon, 'Stadia+');

        setInterval(() => {
            if (document.getElementById(component.id)) return;

            component.create();
            button.create(() => {
                button.buttonElement.addEventListener('click', () => {
                    component.open();
                });
            });
        }, 1000);
    });
})();
