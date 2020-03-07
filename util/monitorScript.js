/* eslint-disable no-loop-func */
/* eslint-disable no-global-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-restricted-globals */

// Stadia Stream Monitor version 0.3
// by AquaRegia
// Reddit: u/AquaRegia
// Discord: AquaRegia#9152

(() => {
    setInterval(() => {
        const container = document.querySelector('.overlay-toggle-container');
        const btn = document.querySelector('#network_overlay_button');
        if (!container || btn) {
            return;
        }

        const element = document.createElement('div');
        element.innerHTML = 'Toggle Network Overlay';
        element.id = 'network_overlay_button';
        element.classList.add('stadiaplus_button');
        element.classList.add(
            'CTvDXd',
            'QAAyWd',
            'Fjy05d',
            'ivWUhc',
            'QSDHyc',
            'rpgZzc',
            'RkyH1e',
        );
        container.appendChild(element);

        element.addEventListener('click', () => {
            const infoBox = document.getElementById('infoBox');
            infoBox.location = (infoBox.location + 1) % 5;

            const locations = [
                'none',
                'top left',
                'top right',
                'bottom right',
                'bottom left',
            ];

            infoBox.classList.add('stadiaplus_overlay');

            for (const location of locations) {
                for (const loc of location.split(' ')) {
                    infoBox.classList.remove(loc);
                }
            }

            for (const loc of locations[infoBox.location].split(' ')) {
                infoBox.classList.add(loc);
            }
        });
    }, 1000);

    function formatBytes(a, b) {
        if (a === undefined || a === null || isNaN(a) || a === 0) return '0 Bytes';
        const c = 1024;
        const d = b || 2;
        const e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const f = Math.floor(Math.log(a) / Math.log(c));
        return `${parseFloat((a / c ** f).toFixed(d))} ${e[f]}`;
    }

    let peerConnections = [];

    (function (OriginalRTCConnection) {
        RTCPeerConnection = function (...args) {
            const connection = new OriginalRTCConnection(args);
            peerConnections.push(connection);
            return connection;
        };
        RTCPeerConnection.prototype = OriginalRTCConnection.prototype;
    }(RTCPeerConnection));

    const infoBox = document.createElement('div');
    infoBox.id = 'infoBox';
    infoBox.innerHTML = 'Start a game to monitor traffic';

    infoBox.location = 0;
    document.body.appendChild(infoBox);

    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'm') {
            infoBox.location = (infoBox.location + 1) % 5;

            const locations = [
                'none',
                'top left',
                'top right',
                'bottom right',
                'bottom left',
            ];

            infoBox.classList.add('stadiaplus_overlay');
            for (const location of locations) {
                for (const loc of location.split(' ')) {
                    infoBox.classList.remove(loc);
                }
            }
            for (const loc of locations[infoBox.location].split(' ')) {
                infoBox.classList.add(loc);
            }
        }
    });

    let lastBytes = 0;
    let lastFrames = 0;
    let sessionStart;
    let active = false;

    setInterval(() => {
        if (document.location.href.indexOf('/player/') === -1) {
            peerConnections = [];
            lastBytes = 0;
            lastFrames = 0;
            active = false;

            infoBox.innerHTML = 'Start a game to monitor traffic';
        } else if (peerConnections.length === 3) {
            if (!active) {
                sessionStart = new Date();
                active = true;
            }

            peerConnections[2].getStats().then((stats) => {
                for (const key of stats.keys()) {
                    if (key.indexOf('RTCInboundRTPVideoStream') !== -1) {
                        const videoStream = stats.get(key);
                        const trackId = stats.get(videoStream.trackId);

                        // eslint-disable-next-line no-shadow
                        peerConnections[2].getStats((stats) => {
                            const tmp3 = stats
                                .result()
                                .find(
                                    (f) => f.type === 'ssrc'
                                        && f.id.endsWith('recv')
                                        && f.names().includes('mediaType')
                                        && f.stat('mediaType') === 'video',
                                );

                            /*  //// DEBUG LOGGING
                             *
                             *  for(var res of stats.result()) {
                             *      // console.log({id: res.id, names: res.names()});
                             *  }
                             *  console.log({id: tmp3.id, names: tmp3.names()});
                             *  console.log(tmp3.stat("googTargetDelayMs"));
                             */

                            let time = new Date();

                            const sessionDuration = time - sessionStart;
                            const formattedSessionDuration = new Date(
                                sessionDuration,
                            )
                                .toUTCString()
                                .slice(17, 25);

                            [time] = new Date(
                                time - time.getTimezoneOffset() * 60 * 1000,
                            )
                                .toISOString()
                                .replace('T', ' ')
                                .split('.');

                            const {
                                framesReceived,
                                framesDropped,
                                frameHeight,
                                frameWidth,
                            } = trackId;
                            const { bytesReceived, packetsLost } = videoStream;

                            const resolution = `${frameWidth}x${frameHeight}`;
                            const framesReceivedPerSecond = framesReceived - lastFrames;
                            const bytesReceivedPerSecond = bytesReceived - lastBytes;
                            const averageData = ((bytesReceived / sessionDuration) * 3600)
                                / 1024 ** 3;

                            // var audioLatency = tmp3.stat("googCurrentDelayMs");
                            const codec = tmp3.stat('googCodecName');
                            const latency = tmp3.stat('googTargetDelayMs');

                            const jitterBuffer = tmp3.stat(
                                'googJitterBufferMs',
                            );

                            lastFrames = framesReceived;
                            lastBytes = bytesReceived;

                            if (framesReceived > 0) {
                                const html = `
                                    <h5>${time}</h5>
                                    <hr>
                                    <p>
                                        Session duration: ${formattedSessionDuration}<br/>
                                        Resolution: ${resolution}<br/>
                                        FPS: ${framesReceivedPerSecond}<br/>
                                        Codec: ${codec}<br/>
                                        Session traffic: ${formatBytes(bytesReceived)}<br/>
                                        Current traffic: ${formatBytes(bytesReceivedPerSecond * 8, 2).slice(0, -1)} b/s<br/>
                                        Average traffic: ${averageData.toFixed(2)} GB/h<br/>
                                        Packets lost: ${packetsLost}<br/>
                                        Frames dropped: ${framesDropped}<br/>
                                        Latency: ${latency} ms<br/>
                                        Jitter buffer: ${jitterBuffer} ms
                                    </p>
                                `;

                                infoBox.innerHTML = html;
                            }
                        });
                    }
                }
            });
        }
    }, 1000);
})();
