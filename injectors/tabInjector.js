(() => {
    const { UIComponent, UIButton, chrome } = window;
    window.addEventListener('load', () => {
        const component = new UIComponent(
            'Stadia+',
            `
                <div class="overlay-toggle-container"></div>
                <hr />
                <div class="codec-container"></div>
                <hr />
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
