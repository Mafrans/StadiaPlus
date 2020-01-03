console.log("[STADIA+] Injecting Network Listener");

// @version      0.3
// @author       AquaRegia

function createRTCOverride() {
    const url = chrome.runtime.getURL('util/monitorScript.js');

    let element = document.createElement("script");
    element.innerHTML = httpGet(url);
    document.body.appendChild(element);
}

document.addEventListener("DOMContentLoaded", function() {
    createRTCOverride();
});

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}