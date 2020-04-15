(() => {
    window.addEventListener('load', () => {
        document.querySelectorAll('.load').forEach(e => e.classList.add('loaded'));
    });

    const history = [];
    const open = function(element) {
        const current = document.querySelector('.page.active');
        current.classList.remove('active');
    
        if(element.classList.contains('left')) {
            element.classList.remove('left');
            element.classList.add('active');
    
            current.classList.add('right');
        }
    
        if(element.classList.contains('right')) {
            element.classList.remove('right');
            element.classList.add('active');
    
            current.classList.add('left');
        }

        history.push(current);
    }

    const back = function() {
        console.log(history);
        open(history.pop());
    }

    const settingsButton = document.querySelector('.settings-button');
    settingsButton.addEventListener('click', () => {
        open(document.querySelector('.page.settings'));
    });
    
    document.querySelectorAll('.back-button').forEach(e => {
        console.log(e);
        e.addEventListener('click', () => back());
    });

    const languageSelect = new SlimSelect({
        select: '#language-select',
        onChange: (info) => {
          console.log(info);
          chrome.storage.sync.set({language: info.value});

          return true; // 'false' will stop propagation
        }
    });

    chrome.storage.sync.get(['language'], (result) => {
        languageSelect.set(result.language);
    });
})()
