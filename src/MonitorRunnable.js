const MonitorRunnable = function() {
    this.enabled = false;
    this.peerConnections = [];
    this.originalRTC;
    this.startTime;
    this.element;
    this.editable = false;

    console.log('trying to connect hook...')
    const self = this;
    this.originalRTC = RTCPeerConnection;
    (function(OriginalRTCConnection) {
        self.originalRTC = OriginalRTCConnection;

        RTCPeerConnection = function(args) {
            const connection = new OriginalRTCConnection(args);
            self.peerConnections.push(connection);
            return connection;
        };
        RTCPeerConnection.prototype = OriginalRTCConnection.prototype;
    })(RTCPeerConnection);

    this.start = function() {
        this.enabled = true;
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_networkmonitor');
        this.element.id = 'networkmonitor-' + Math.floor(Math.random() * 999999);
        document.body.appendChild(this.element);

        this.update();
    };

    this.setEditable = function(editable) {
        this.editable = editable;
        this.element.classList.toggle('editable', editable);
    }

    this.setVisible = function(visible) {
        this.visible = visible;
    }

    this.stop = function() {
        this.enabled = false;
        this.element.remove();

        RTCPeerConnection = this.originalRTC;
        peerConnections = [];
    };

    this.visible = {
        'resolution': true,
        'FPS': true,
        'latency': true,
        'codec': true,
        'traffic': true,
        'current-traffic': true,
        'average-traffic': true,
        'packets-lost': true,
        'average-packet-loss': true,
        'jitter-buffer': true,
    };

    this.stats = [];
    this.update = function() {
        if (this.peerConnections.length === 3) {
            this.peerConnections[2].getStats().then((_stats) => {
                this.stats = Array.from(_stats);

                const RTCInboundRTPVideoStream = this.getStat((stat) => stat[0].startsWith('RTCInboundRTPVideoStream'), );
                const RTCIceCandidatePair = this.getStat((stat) => stat[0].startsWith('RTCIceCandidatePair'), );
                const RTCMediaStreamTrack_receiver = this.getStat( (stat) => stat[0].startsWith('RTCMediaStreamTrack_receiver') && stat[1].kind === 'video', );

                const resolution = this.getResolution(RTCMediaStreamTrack_receiver);
                const fps = this.getFPS(RTCInboundRTPVideoStream);
                const latency = this.getLatency(RTCIceCandidatePair) + ' ms';
                const codec = this.getCodec(RTCInboundRTPVideoStream);
                const totalTraffic = this.translateBitUnits(this.getTotalDownload(RTCIceCandidatePair));
                const currentTraffic = this.translateBitUnits(this.getDownloadSpeed(RTCIceCandidatePair)) + '/s';
                const averageTraffic = this.translateBitUnits(this.getAverageDownloadSpeed(RTCIceCandidatePair)) + '/s';
                const packetsLost = this.getPacketsLost( RTCInboundRTPVideoStream);
                const averagePacketLoss = this.getAveragePacketLoss(RTCInboundRTPVideoStream) + '%';
                const jitterBuffer = this.getJitterBuffer(RTCMediaStreamTrack_receiver) + ' ms';

                let time = new Date();
                time = new Date( time - time.getTimezoneOffset() * 60 * 1000 )
                let timeString = time.toLocaleString();
                let html = `<h5>${timeString}</h5>`;

                html += '<ul>';
                if (this.visible['resolution']) {
                    html += `<li>Resolution: ${resolution.width}x${resolution.height}</li>`;
                }

                if (this.visible['FPS']) {
                    html += `<li>FPS: ${fps}</li>`;
                }

                if (this.visible['latency']) {
                    html += `<li>Latency: ${latency}</li>`;
                }

                if (this.visible['codec']) {
                    html += `<li>Codec: ${codec}</li>`;
                }

                if (this.visible['traffic']) {
                    html += `<li>Total Traffic: ${totalTraffic}</li>`;
                }

                if (this.visible['current-traffic']) {
                    html += `<li>Current Traffic: ${currentTraffic}</li>`;
                }

                if (this.visible['average-traffic']) {
                    html += `<li>Average Traffic: ${averageTraffic}</li>`;
                }

                if (this.visible['packets-lost']) {
                    html += `<li>Packets Lost: ${packetsLost}</li>`;
                }

                if (this.visible['average-packet-loss']) {
                    html += `<li>Average Packet Loss: ${averagePacketLoss}</li>`;
                }

                if (this.visible['jitter-buffer']) {
                    html += `<li>Jitter Buffer: ${jitterBuffer}</li>`;
                }

                html += '</ul>';

                this.element.innerHTML = html;
            });
        } 
        else {
            this.startTime = Date.now();
        }

        if (this.enabled) {
            setTimeout(() => {
                this.update();
            }, 1000);
        }
    };

    this.getStat = function(filter) {
        return this.stats.find(filter)[1];
    };

    this.translateBitUnits = function(value) {
        const units = ['b', 'kb', 'Mb', 'Gb'];

        let i = 0;
        while (value / 1000 >= 1) {
            i++;
            value /= 1000;
        }

        return (
            value.toPrecision(4) + ' ' + units[Math.min(units.length - 1, i)]
        );
    };

    this.getLatency = function(RTCIceCandidatePair) {
        return RTCIceCandidatePair.currentRoundTripTime * 1000;
    };

    this.getJitterBuffer = function(RTCMediaStreamTrack_receiver) {
        return (
            (RTCMediaStreamTrack_receiver.jitterBufferDelay * 1000) /
            RTCMediaStreamTrack_receiver.jitterBufferEmittedCount
        ).toPrecision(4);
    };

    this.getPacketsLost = function(RTCInboundRTPVideoStream) {
        return RTCInboundRTPVideoStream.packetsLost;
    };

    this.getAveragePacketLoss = function(RTCInboundRTPVideoStream) {
        return (
            (RTCInboundRTPVideoStream.packetsLost /
                (RTCInboundRTPVideoStream.packetsReceived +
                    RTCInboundRTPVideoStream.packetsLost)) *
            100
        ).toPrecision(2);
    };

    this.lastDownload = 0;
    this.getDownloadSpeed = function(RTCIceCandidatePair) {
        const download = this.getTotalDownload(RTCIceCandidatePair);
        const speed = download - this.lastDownload;
        this.lastDownload = download;
        return speed;
    };

    this.getAverageDownloadSpeed = function(RTCIceCandidatePair) {
        return (
            this.getTotalDownload(RTCIceCandidatePair) /
            (this.timeSinceStart() / 1000)
        );
    };

    this.getTotalDownload = function(RTCIceCandidatePair) {
        return RTCIceCandidatePair.bytesReceived * 8;
    };

    this.getResolution = function(RTCMediaStreamTrack_receiver) {
        return {
            width: RTCMediaStreamTrack_receiver.frameWidth,
            height: RTCMediaStreamTrack_receiver.frameHeight,
        };
    };

    this.getCodec = function(RTCInboundRTPVideoStream) {
        const codecStat = this.getStat(
            (stat) => stat[0] === RTCInboundRTPVideoStream.codecId,
        );
        return codecStat.mimeType.substring('video/'.length);
    };

    this.lastFrames = 0;
    this.getFPS = function(RTCInboundRTPVideoStream) {
        const fps = RTCInboundRTPVideoStream.framesDecoded - this.lastFrames;
        this.lastFrames = RTCInboundRTPVideoStream.framesDecoded;
        return fps;
    };

    this.timeSinceStart = function() {
        return Date.now() - this.startTime;
    };
};

StadiaPlusMonitor = new MonitorRunnable();
