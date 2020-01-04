/* eslint-disable no-use-before-define */
console.log('[STADIA+] Injecting Network Listener');

// @version      0.3
// @author       AquaRegia

function createRTCOverride() {
    const { chrome } = window;
    const url = chrome.runtime.getURL('util/monitorScript.js');

    const element = document.createElement('script');
    element.innerHTML = httpGet(url);
    document.body.appendChild(element);
}

document.addEventListener('DOMContentLoaded', () => {
    createRTCOverride();
});

function httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
