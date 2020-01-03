// ==UserScript==
// @name         Stadia Stream Monitor
// @version      0.3
// @author       AquaRegia
// @match        https://stadia.google.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    setInterval(() => {
        let container = document.querySelector(".dSGvzf>div");
        let btn = document.querySelector("#network_overlay_button");
        if(!container || btn) {
            return;
        }

        let element = document.createElement("div");
        element.innerHTML = "Toggle Network Overlay";
        element.id = "network_overlay_button";
        element.classList.add("stadiaplus_button");
        element.classList.add("CTvDXd", "QAAyWd", "Fjy05d", "ivWUhc", "QSDHyc", "rpgZzc", "RkyH1e");
        container.appendChild(element);
        console.log({container, element});

        element.addEventListener("click", function(e) {
            let infoBox = document.getElementById("infoBox");
            infoBox.location = (infoBox.location + 1) % 5;
    
            let locations = [
                "none",
                "top left",
                "top right",
                "bottom right",
                "bottom left"
            ];
    
            infoBox.classList.add("stadiaplus_overlay");
            for(let location of locations) {
                for(let loc of location.split(" ")) {
                    infoBox.classList.remove(loc);
                }
            }
            for(let loc of locations[infoBox.location].split(" ")) {
                infoBox.classList.add(loc);
            }
        });
    }, 1000)

    function formatBytes(a,b){if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}

    var peerConnections = [];

    (function(original) {
        RTCPeerConnection = function() {
            var connection = new original(arguments);
            peerConnections.push(connection);
            return connection;
        };
        RTCPeerConnection.prototype = original.prototype;
    })(RTCPeerConnection);

    var infoBox = document.createElement("div");
    infoBox.id = "infoBox";
    infoBox.innerHTML = "Start a game to monitor traffic";

    infoBox.location = 0;
    document.body.appendChild(infoBox);

    window.addEventListener("keydown", function(e)
    {
        if(e.ctrlKey && e.key == "m")
        {
            infoBox.location = (infoBox.location + 1) % 5;

            let locations = [
                "none",
                "top left",
                "top right",
                "bottom right",
                "bottom left"
            ];

            infoBox.classList.add("stadiaplus_overlay");
            for(let location of locations) {
                for(let loc of location.split(" ")) {
                    infoBox.classList.remove(loc);
                }
            }
            for(let loc of locations[infoBox.location].split(" ")) {
                infoBox.classList.add(loc);
            }
        }
    });

    var lastBytes = 0;
    var lastFrames = 0;

    setInterval(function()
    {
        if(document.location.href.indexOf("/player/") == -1)
        {
            peerConnections = [];
            lastBytes = 0;
            lastFrames = 0;

            infoBox.innerHTML = "Start a game to monitor traffic";
        }
        else if(peerConnections.length == 3)
        {
            peerConnections[2].getStats().then(function(stats)
            {
                for(var key of stats.keys())
                {
                    if(key.indexOf("RTCInboundRTPVideoStream") != -1)
                    {
                        var tmp1 = stats.get(key);
                        var tmp2 = stats.get(tmp1.trackId);

                        peerConnections[2].getStats(function(stats)
                        {
                            var tmp3 = stats.result().find(function(f)
                            {
                                return "ssrc" == f.type && f.id.endsWith("recv") && f.names().includes("mediaType") && "video" == f.stat("mediaType");
                            });

                            var time = new Date();
                            time = new Date(time - time.getTimezoneOffset() * 60 * 1000).toISOString().replace("T", " ").split(".")[0];
                            var resolution = tmp2.frameWidth + "x" + tmp2.frameHeight;
                            var framesReceived = tmp2.framesReceived;
                            var framesReceivedPerSecond = (framesReceived - lastFrames);
                            var codec = tmp3.stat("googCodecName");
                            var bytesReceived = tmp1.bytesReceived;
                            var bytesReceivedPerSecond = (bytesReceived - lastBytes);
                            var packetsLost = tmp1.packetsLost;
                            var framesDropped = tmp2.framesDropped;
                            var latency = tmp3.stat("googCurrentDelayMs");

                            lastFrames = framesReceived;
                            lastBytes = bytesReceived;

                            if(framesReceived > 0)
                            {
                                var html = `
                                    <h5>${time}</h5>
                                    <hr>
                                    <p>
                                        Resolution: ${resolution}<br/>
                                        FPS: ${framesReceivedPerSecond}<br/>
                                        Codec ${codec}<br/>
                                        Session traffic: ${formatBytes(bytesReceived)}<br/>
                                        Current traffic: ${formatBytes(bytesReceivedPerSecond*8, 2).slice(0, -1)} b/s<br/>
                                        Packets lost: ${packetsLost}<br/>
                                        Frames dropped: ${framesDropped}<br/>
                                        Latency: ${latency} ms
                                    </p>
                                `;  

                                infoBox.innerHTML = html;
                            }
                        });
                    }
                }
            });
        }
    }, 500);
})();