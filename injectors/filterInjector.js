console.log("[STADIA+] Injecting Filters");

let gameStorage = {};
let sunStorage = false;
let sortStorage = "played";
let recentlyPlayed = [];

if(window.location.href.includes("/home")) {
    window.addEventListener("load", () => {
        //chrome.storage.local.clear();
        let elements = document.querySelectorAll(".GqLi4d");
        for(let el of elements) {
            recentlyPlayed.push(el);
        }
    
        injectImages();
        injectFilterBar();
        setInterval(createImages, 500);
        setInterval(injectFilterBar, 100)
        updateStorage();
    })
}

function updateStorage(callback) {
    chrome.storage.local.get(['games', 'sun', 'order'], function(result) {
        let resStorage = result["games"];
        if(!resStorage) resStorage = {};

        sunStorage = result.sun;
        orderStorage = result.order;

        let sun = document.querySelector(".stadiaplus_icon_sun");
        if(sun) sun.classList.remove("enabled");

        let order = document.querySelector(".stadiaplus_filterbar>.order-dropdown>#dropdown");
        if(order) order.value = orderStorage;

        if(sunStorage) sun.classList.add("enabled");

        for(let element of document.querySelectorAll(".GqLi4d.QAAyWd")) {
            let game;
            let name = element.getAttribute("aria-label");

            if(resStorage.hasOwnProperty(name)) {
                game = resStorage[name];
            }
            else {
                game = {
                    visible: element.style["display"] != "none"
                };
            }

            gameStorage[name] = game;
            updateGame(name);
        }
        if(callback) {
            callback();
        }
        saveStorage();
    });
}

function saveStorage(callback) {
    chrome.storage.local.set({'games': gameStorage, 'sun': sunStorage, 'order': orderStorage}, callback);
}

function updateGame(name) {
    let tile = getTile(name);
    let sun = document.querySelector(".stadiaplus_filterbar>.stadiaplus_icon_sun");

    if(sun.classList.contains("enabled")) {
        tile.style["display"] = "";
    }
    else {
        tile.style["display"] = getFromStorage(name).visible ? "" : "none";
    }
}

function injectImages() {
    if(!document.querySelector(".stadiaplus_game")) {
        //createImages();
        updateStorage();
    }

    setTimeout(injectImages, 100);
}

function getFromStorage(name) {
    return gameStorage[name];
}

function getTile(name) {
    for(let g of document.querySelectorAll(".GqLi4d.QAAyWd")) {
        if(g.getAttribute("aria-label") == name) {
            return g;
        }
    }
}

function createImages() {
    let gameTiles = document.querySelectorAll(".GqLi4d");

    let eyes = document.querySelectorAll(".stadiaplus_icon_visibility");
    for(let e of eyes) {
        e.remove();
    }
    

    gameTiles.forEach(element => {
        if(element.style["display"] == "none") return;

        let game = getFromStorage(element.getAttribute("aria-label"));
        if(game == null) {
            game = {
                visible: true
            };
        }


        let eye = document.createElement("img");
        
        if(game.visible) {
            eye.src = chrome.runtime.getURL("images/icons/visibility.svg");
        }
        else {
            eye.src = chrome.runtime.getURL("images/icons/visibility_off.svg");
        }

        eye.classList.add("stadiaplus_icon_visibility");
        element.classList.add("stadiaplus_game");

        element.parentElement.insertBefore(eye, element);

        eye.style["left"] = (element.offsetLeft+element.clientWidth) + "px";
        eye.style["top"] = (element.offsetTop+element.clientHeight) + "px";

        eye.addEventListener("click", (event) => {
            let tile = element;
            //tile.style["display"] = tile.style["display"] == "none" ? "" : "none";

            let name = element.getAttribute("aria-label")
            let game = getFromStorage(name);
            game.visible = !game.visible;

            gameStorage[name] = game;
            saveStorage(()=>{updateStorage(createImages)});
        });
    });
}

function injectFilterBar() {
    if(!document.querySelector(".stadiaplus_filterbar")) {
        let html = `
        <div class="stadiaplus_filterbar">
            <img class="stadiaplus_icon_filter" src="${chrome.runtime.getURL("images/icons/filter.svg")}">
            <div class="stadiaplus_dropdown">
                <select name="order" id="dropdown">
                    <p>order</p>
                    <option value="played">Recently Played</option>
                    <option value="alphabetical">A-Z</option>
                    <option value="bought" disabled>Recently Bought</option>
                    <option value="random">Random</option>
                </select>
            </div>
            <img class="stadiaplus_icon_sun" src="${chrome.runtime.getURL("images/icons/sun.svg")}">
        </div>
        `
    
        let container = document.querySelector(".CVVXfc.YYy3Zb");
        let el = document.createElement("div");
        el.innerHTML = html;
        container.appendChild(el);

        new SlimSelect({
            select: '#dropdown',
            showSearch: false
        });

        addFilterBarEvents();
        sortGames();
    }
}

function addFilterBarEvents() {
    let orderDropdown = document.querySelector(".stadiaplus_filterbar #dropdown");
    orderDropdown.addEventListener("change", (event) => {
        orderStorage = orderDropdown.value;
        saveStorage();
        sortGames();
    });

    
    let sun = document.querySelector(".stadiaplus_filterbar>.stadiaplus_icon_sun");
    sun.addEventListener("click", (event) => {
        sun.classList.toggle("enabled");
        sunStorage = !sunStorage;
        saveStorage();
        updateStorage();
    })
}

function sortGames() {
    let orderDropdown = document.querySelector(".stadiaplus_filterbar #dropdown");
    switch(orderDropdown.value) {
        case "alphabetical":
            sortAlphabetical();
            break;
        case "played": 
            sortRecentlyPlayed();
            break;
        case "random":
            sortRandom();
            break;
    } 
}

function sortAlphabetical() {
    let elements = document.querySelectorAll(".GqLi4d");
    let arr = [];
    let parent = elements[0].parentElement;
    for(let el of elements) {
        arr.push(el);
        el.remove();
    }
    
    arr.sort(function(a, b) {
        return a.getAttribute("aria-label") < b.getAttribute("aria-label") ? -1 : 1;
    });
    
    for(let el of arr) {
        parent.appendChild(el);
    }
}


function sortRandom() {
    let elements = document.querySelectorAll(".GqLi4d");
    let arr = [];
    let parent = elements[0].parentElement;
    for(let el of elements) {
        arr.push(el);
        el.remove();
    }
    
    arr.sort(function(a, b) {
        return Math.sign(Math.random() - 0.5);
    });
    
    for(let el of arr) {
        parent.appendChild(el);
    }
}

function sortRecentlyPlayed() {
    let elements = document.querySelectorAll(".GqLi4d");
    let parent = elements[0].parentElement;
    for(let el of elements) {
        el.remove();
    }

    for(let el of recentlyPlayed) {
        parent.appendChild(el);
    }
}