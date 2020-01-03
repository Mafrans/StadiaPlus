// ==UserScript==
// @name         Stadia Stream Monitor
// @version      0.5
// @author       AquaRegia
// @match        https://stadia.google.com/*
// @downloadURL  https://pastebin.com/raw/M29RNrLf
// @homepageURL  https://www.reddit.com/r/Stadia/comments/eimw7m/tampermonkey_monitor_your_stream/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function formatBytes(a,b){if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}

    function formatTime(seconds)
    {
        var hours = Math.floor(seconds / 3600);
        seconds -= hours*3600;

        var minutes = Math.floor(seconds / 60);
        seconds -= minutes*60;

        return (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + Math.floor(seconds);
    }

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
    infoBox.style.position = "fixed";
    infoBox.style.top = 0;
    infoBox.style.left = 0;
    infoBox.style.width = "215px";
    infoBox.style.opacity = 0.5;
    infoBox.style.zIndex = 1000;
    infoBox.style.backgroundColor = "black";
    infoBox.style.padding = "5px";

    infoBox.location = 1;

    document.body.appendChild(infoBox);

    window.addEventListener("keydown", function(e)
    {
        if(e.ctrlKey && e.key == "m")
        {
            infoBox.location = (infoBox.location + 1) % 5;

            switch(infoBox.location)
            {
                case 0:
                    infoBox.style.display = "none";
                    break;
                case 1:
                    infoBox.style.top = 0;
                    infoBox.style.right = "";
                    infoBox.style.bottom = "";
                    infoBox.style.left = 0;
                    infoBox.style.display = "block";
                    break;
                case 2:
                    infoBox.style.top = 0;
                    infoBox.style.right = 0;
                    infoBox.style.bottom = "";
                    infoBox.style.left = "";
                    infoBox.style.display = "block";
                    break;
                case 3:
                    infoBox.style.top = "";
                    infoBox.style.right = 0;
                    infoBox.style.bottom = 0;
                    infoBox.style.left = "";
                    infoBox.style.display = "block";
                    break;
                case 4:
                    infoBox.style.top = "";
                    infoBox.style.right = "";
                    infoBox.style.bottom = 0;
                    infoBox.style.left = 0;
                    infoBox.style.display = "block";
                    break;
            }
        }
    });

    var lastBytes = 0;
    var lastFrames = 0;
    var sessionStart;
    var active = false;

    setInterval(function()
    {
        if(document.location.href.indexOf("/player/") == -1)
        {
            peerConnections = [];
            lastBytes = 0;
            lastFrames = 0;
            active = false;

            infoBox.innerHTML = "Start a game to monitor traffic";
        }
        else if(peerConnections.length == 3)
        {
            if(!active)
            {
                sessionStart = new Date();
                active = true;
            }

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

                            console.log(sessionStart);

                            var time = new Date();
                            var sessionDuration = (time - sessionStart) / 1000;
                            time = new Date(time - time.getTimezoneOffset() * 60 * 1000).toISOString().replace("T", " ").split(".")[0];
                            var resolution = tmp2.frameWidth + "x" + tmp2.frameHeight;
                            var framesReceived = tmp2.framesReceived;
                            var framesReceivedPerSecond = (framesReceived - lastFrames);
                            var codec = tmp3.stat("googCodecName");
                            var bytesReceived = tmp1.bytesReceived;
                            var bytesReceivedPerSecond = (bytesReceived - lastBytes);
                            var averageData = ((((bytesReceived / sessionDuration) * 3600) / 1024) / 1024) / 1024;
                            var packetsLost = tmp1.packetsLost;
                            var framesDropped = tmp2.framesDropped;
                            var latency = tmp3.stat("googCurrentDelayMs");
                            var jitterBuffer = tmp3.stat("googJitterBufferMs");

                            lastFrames = framesReceived;
                            lastBytes = bytesReceived;

                            if(framesReceived > 0)
                            {
                                var html = "";

                                html += "<b>" + time + "</b>";
                                html += "<br/>";

                                html += "Session time: " + formatTime(sessionDuration);
                                html += "<br/>";

                                html += "Resolution: " + resolution;
                                html += "<br/>";

                                html += "FPS: " + framesReceivedPerSecond;
                                html += "<br/>";

                                html += "Codec: " + codec;
                                html += "<br/>";

                                html += "Session traffic: " + formatBytes(bytesReceived, 2);
                                html += "<br/>";

                                html += "Current traffic: " + formatBytes(bytesReceivedPerSecond*8, 2).slice(0, -1) + "b/s";
                                html += "<br/>";

                                html += "Average traffic: " + averageData.toFixed(2) + " GB/h";
                                html += "<br/>";

                                html += "Packets lost: " + packetsLost;
                                html += "<br/>";

                                html += "Frames dropped: " + framesDropped;
                                html += "<br/>";

                                html += "Latency: " + latency + "ms";
                                html += "<br/>";

                                html += "Jitter buffer: " + jitterBuffer + "ms";

                                infoBox.innerHTML = html;
                            }
                        });
                    }
                }
            });
        }
    }, 1000);
})();
