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
            console.log('loop');
            if (document.getElementById(component.id)) return;
            console.log('keep going');

            component.create();
            button.create(() => {
                console.log(button);
                button.buttonElement.addEventListener('click', () => {
                    component.open();
                    console.log('open!');
                });

                console.log('creating...');
            });
        }, 1000);
    });
})();
