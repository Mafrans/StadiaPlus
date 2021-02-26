import { RTCStatistics } from "../../RTCStatistics";
const RTCStatistic = RTCStatistics.RTCStatistic;

export function reorder<T>(list: T[], startIndex: number, endIndex: number) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export function formatBytes(value: number, decimals?: number): string {
    if (value === 0) {
        return "0 Bytes";
    }

    const exponent = Math.floor(Math.log(value) / Math.log(1024));
    const suffixes = ["Bytes", "KB", "MB", "GB", "TB", "PB"]

    return `${(value / Math.pow(1024, exponent)).toFixed(decimals || 2)} ${suffixes[exponent]}`;
}


export const getPrimaryAudioStream = (statsData: [string, any]): RTCStatistics.RTCAudioRTPStream => ( 
    RTCStatistic.from<RTCStatistics.RTCAudioRTPStream>(
        statsData,
        id => id.startsWith('RTCInboundRTPAudioStream')
    )
);

export const getPrimaryVideoStream = (statsData: [string, any]): RTCStatistics.RTCVideoRTPStream => (
    RTCStatistic.from<RTCStatistics.RTCVideoRTPStream>(
        statsData,
        id => id.startsWith('RTCInboundRTPVideoStream')
    )
);

export const getPrimaryAudioCodec = (statsData: [string, any], codecId: string): RTCStatistics.RTCCodec => (
    RTCStatistic.from<RTCStatistics.RTCCodec>(
        statsData,
        id => id === codecId
    )
);

export const getPrimaryVideoCodec = (statsData: [string, any], codecId: string): RTCStatistics.RTCCodec => (
    RTCStatistic.from<RTCStatistics.RTCCodec>(
        statsData,
        id => id === codecId
    )
);

export type getStreamResponse = {
    audioStream: RTCStatistics.RTCAudioRTPStream;
    videoStream: RTCStatistics.RTCVideoRTPStream;
    audioCodec: RTCStatistics.RTCCodec;
    videoCodec: RTCStatistics.RTCCodec;

}
export function getStream (statArray: [string, any]): getStreamResponse {
    const _audioStream = getPrimaryAudioStream(statArray);
    const _videoStream = getPrimaryVideoStream(statArray);
    return {
        audioStream: _audioStream,
        videoStream: _videoStream,
        audioCodec: getPrimaryAudioCodec(statArray, _audioStream.codecId!),
        videoCodec: getPrimaryVideoCodec(statArray, _videoStream.codecId!)
    }
}