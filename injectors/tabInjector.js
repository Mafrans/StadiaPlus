(() => {
    const { UIComponent, UIButton, chrome } = window;
    const motdList = [
        '<img src="https://cdn.discordapp.com/emojis/636227864076746772.png?v=1" style="display: inline-flex; width: 24px">',
        'Don\'t look here, look below!',
        'Reality can be whatever I want.',
        'If you ask nicely, Stadia might even do your laundry for you!',
        'Have you tried asking customer support?',
        'Follow u/mafrans on Reddit!',
        'Stadia+, like Google+ but still alive.',
        'Stadia is DOA, believe me.',
        'Get a load of this guy, using chrome extensions to improve his Stadia experience.',
        'I\'m telling you, don\'t trust that guy. You know, the guy.',
        'Shoutout to Chris and Grace!',
        'Have you tried Splitlings yet?',
        'Always check the ratings before you buy a new game.',
        'Have you tried GeForce Now?',
        'A hot dog is definitely not a sandwich.',
        'Idk about you, but I really want one of those fancy smart toilets.',
        'Chris is typing guys!!',
        'Does anyone have a buddy pass I could borrow?',
        'I paid $139 for this?',
        'Is Fortnite on Stadia yet?',
        'u/baconrules was the first to see 4k!',
    ];

    window.addEventListener('load', () => {
        const component = new UIComponent(
            'Stadia+',
            `
                <i 
                    class="stadiaplus_muted" 
                    style="margin-top: 1rem; margin-bottom: 5rem; display: block"
                >
                    ${motdList[Math.floor(Math.random() * motdList.length)]}
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
