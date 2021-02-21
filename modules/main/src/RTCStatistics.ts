export namespace RTCStatistics {
    export interface RTCStatistic {
        type: 'audio'           | 'certificate'     | 'codec'
            | 'data-channel'    | 'candidate-pair'  | 'inbound-rtp'
            | 'outbound-rtp'    | 'track'           | 'remote-candidate'
            | 'local-candidate' | 'stream'          | 'transport'
        id: string
        timestamp: number
    }

    export interface RTCPeerConnection extends RTCStatistic {
        dataChannelsClosed: number,
        dataChannelsOpened: number,
    }

    export interface RTCAudioSource extends RTCStatistic {
        audioLevel: number
        totalAudioEnergy: number
        totalSamplesDuration: number
        kind: 'audio' | 'video'
        trackIdentifier: string
    }

    export interface RTCCertificate extends RTCStatistic {
        base64Certificate: string
        fingerprint: string
        fingerprintAlgorithm: string
    }

    export interface RTCCodec extends RTCStatistic {
        direction: 'inbound' | 'outbound'
        channels: number
        clockRate: number
        mimeType: 'audio/opus'
        payloadType: number
        sdpFmtpLine: string
    }

    export interface RTCDataChannel extends RTCStatistic {
        bytesReceived: number
        bytesSent: number
        dataChannelIdentifier: number
        label: 'streamer_data_channel'
        messagesReceived: number
        messagesSent: number
        protocol: string
        state: 'open' | 'closed'
    }

    export interface RTCIceCandidatePair extends RTCStatistic {
        availableOutgoingBitrate: number
        bytesReceived: number
        bytesSent: number
        consentRequestsSent: 7
        currentRoundTripTime: number
        localCandidateId: string
        nominated: boolean
        priority: number
        remoteCandidateId: string
        requestsReceived: number
        requestsSent: number
        responsesReceived: number
        responsesSent: number
        state: 'succeeded'
        totalRoundTripTime: number
        transportId: string
    }

    export interface RTCIceCandidate extends RTCStatistic {
        candidateType: 'host' | 'client'
        deleted: boolean
        ip: string
        isRemote: boolean
        port: number
        priority: number
        protocol: 'tcp' | 'udp'
        transportId: string
    }

    export interface RTCGenericRTPStream extends RTCStatistic {
        direction: 'inbound' | 'outbound'
        bytesSent?: number
        bytesReceived?: number
        codecId: string
        headerBytesSent?: number
        headerBytesReceived?: number
        isRemote: boolean
        kind: 'audio' | 'video'
        lastPacketReceivedTimestamp: number
        mediaType: 'audio' | 'video'
        packetsSent?: number
        packetsReceived?: number
        packetsLost?: number
        retransmittedBytesSent?: number
        retransmittedPacketsSent?: number
        ssrc: number
        trackId?: string
        transportId: string
        mediaSourceId?: string
    }

    export interface RTCAudioRTPStream extends RTCGenericRTPStream {
        audioLevel: number
        concealedSamples: number
        concealmentEvents: number
        fecPacketsDiscarded: number
        fecPacketsReceived: number
        insertedSamplesForDeceleration: number
        jitter: number
        jitterBufferDelay: number
        jitterBufferEmittedCount: number
        removedSamplesForAcceleration: number
        silentConcealedSamples: number
        totalAudioEnergy: number
        totalSamplesDuration: number
        totalSamplesReceived: number
    }

    export interface RTCVideoRTPStream extends RTCGenericRTPStream {
        decoderImplementation: 'ExternalDecoder' | 'libvpx'
        firCount: number
        frameHeight: number
        frameWidth: number
        framesDecoded: number
        framesDropped: number
        framesPerSecond: number
        framesReceived: number
        keyFramesDecoded: number
        nackCount: number
        pliCount: number
        totalDecodeTime: number
        totalInterFrameDelay: number
        totalSquaredInterFrameDelay: number
        trackId: string
    }

    export interface RTCMediaStreamTrack extends RTCStatistic {
        role: 'sender' | 'receiver'
        detached: boolean
        ended: boolean
        jitterBufferDelay: number
        jitterBufferEmittedCount: number
        kind: 'audio' | 'video'
        remoteSource: boolean
        trackIdentifier: string
        mediaSourceId?: string

        // Audio Data
        audioLevel?: number
        concealedSamples?: number
        concealmentEvents?: number
        insertedSamplesForDeceleration?: number
        removedSamplesForAcceleration?: number
        silentConcealedSamples?: number
        totalAudioEnergy?: number
        totalSamplesDuration?: number
        totalSamplesReceived?: number

        // VideoData
        frameHeight?: number
        frameWidth?: number
        framesDecoded?: number
        framesDropped?: number
        framesReceived?: number
    }

    export interface RTCMediaStream extends RTCStatistic {
        streamIdentifier: 'stream_label' | string
        trackIds: string[]
    }

    export interface RTCTransport extends RTCStatistic {
        bytesReceived: number
        bytesSent: number
        dtlsCipler: string
        dtlsState: string
        localCertificateId: string
        packetsReceived: number
        packetsSent: number
        remoteCertificateId: string
        selectedCandidatePairChanges: number
        selectedCandidatePairId: string
        srtpCipher: string
        tlsVersion: string
    }
}
