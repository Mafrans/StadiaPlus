import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { asyncEffect, desandbox } from '../../Util';
import PositionController from './components/PositionController';
import { Config } from '../../../../shared/Config';
import MonitorRunnable from 'bundle-text:../../MonitorRunnable.txt';
import { StadiaSelectors } from '../../StadiaSelectors';
import { formatBytes, getStream, reorder } from './GameMonitorHelpers';
import { DropResult } from 'react-beautiful-dnd';
import { RTCStatistics } from '../../RTCStatistics';
import { CgTrending } from 'react-icons/cg';
import Loader from './components/Loader';
import Header from './components/Header';
import Content from './components/Content';
import style from './game-monitor-component.css';
import classNames from 'classnames';
import { stateStore } from '../../state/StateStore';
import { observer } from 'mobx-react';

export type GameMonitorItem = {
    name: string
    value: string
    id: string
}

export type GameMonitorItemMeta = {
    [id: string]: {
        index: number, visible: boolean
    }
}

type GameMonitorProps = {
    onGrab: (event: React.MouseEvent) => void
    position: {x: number, y: number}
}

const GameMonitor = observer((props: GameMonitorProps) => {
    const lastBytesReceived = useRef<number>(0);
    const isCapturing = useRef<boolean>();

    const [items, setItems]             = useState<GameMonitorItem[]>([]);
    const [enabled, setEnabled]         = useState<boolean>();
    let   [itemMeta, setItemMeta]       = useState<GameMonitorItemMeta>({});
    let   [sidebarOpen, setSidebarOpen] = useState<boolean>();

    const { page } = stateStore;

    asyncEffect(async () => {
        // TODO: Make this an observer
        setInterval(() => {
            const sidebar = document.querySelector(StadiaSelectors.PLAYER_SIDEBAR) as HTMLElement | null;
            const newSidebarOpen = sidebar !== null && sidebar.style.opacity === '1';

            if (newSidebarOpen !== sidebarOpen) {
                sidebarOpen = newSidebarOpen;
                setSidebarOpen(newSidebarOpen);
            }
        }, 500);

        addEventListener('message', onMessageCapture);
        desandbox(MonitorRunnable);
    }, []);

    asyncEffect(async () => {
        if (page === 'player') {
            setEnabled(true);
            setItemMeta(await Config.MONITOR_ITEMS.get() || {});
            desandbox('StadiaPlusNetworkMonitor.start()');
        }
        else {
            setEnabled(false);
            desandbox('StadiaPlusNetworkMonitor.stop()');
        }
    }, [page]);

    const onMessageCapture = (event: MessageEvent) => {
        if (event.data.source === 'StadiaPlusNetworkMonitor' && (!sidebarOpen || items.length === 0)) {
            const statArray: [string, any] = event.data.stats[1];
            const ICECandidatePair = RTCStatistics.RTCStatistic.from<RTCStatistics.RTCIceCandidatePair>(
                statArray,
                id => id.startsWith('RTCIceCandidatePair')
            );

            if (!ICECandidatePair) {
                return;
            }

            const { videoStream, videoCodec, audioCodec } = getStream(statArray);
            const { bytesReceived, currentRoundTripTime } = ICECandidatePair;
            const bytesPerSecond = (bytesReceived ?? 0) - lastBytesReceived.current;

            // TODO: Is it possible to move into a fined format. perhaps a class?
            let newItems = [
                {
                    name: 'Latency',
                    value: `${Math.round(currentRoundTripTime! * 1000)} ms`,
                    id: 'latency',
                },
                {
                    name: 'Resolution',
                    value: `${videoStream?.frameWidth ?? '?'}x${videoStream?.frameHeight ?? '?'}`,
                    id: 'resolution',
                },
                {
                    name: 'Bytes Received',
                    value: `${formatBytes(ICECandidatePair.bytesReceived!)}`,
                    id: 'bytes-received',
                },
                {
                    name: 'Video Codec',
                    value: `${videoCodec?.mimeType?.split('/')?.[1] ?? 'unknown'} (${videoStream?.decoderImplementation === 'ExternalDecoder' ? 'hardware' : 'software'})`,
                    id: 'video-codec',
                },
                {
                    name: 'Audio Codec',
                    value: `${audioCodec?.mimeType?.split('/')?.[1] ?? 'unknown'}`,
                    id: 'audio-codec',
                },
                {
                    name: 'Bytes/s',
                    value: `${formatBytes(bytesPerSecond)}/s`,
                    id: 'bytes-per-second',
                },
            ] as GameMonitorItem[];

            lastBytesReceived.current = bytesReceived ?? 0;
            setItems(newItems);
        }
    }

    const moveItemTo = (id: string, source: number, destination: number) => {
        if (!itemMeta) {
            return;
        }

        const newItemMeta = itemMeta ?? {};
        if (!itemMeta.hasOwnProperty(id)) {
            newItemMeta[id] = {
                visible: true,
                index: 0,
            };
        }

        // Reorder other items to match
        Object.keys(itemMeta).forEach(key => {
            if (!itemMeta?.[key]) {
                itemMeta![key] = {
                    visible: true,
                    index: 0,
                }
            }

            let index = itemMeta![key].index;
            if (source < destination) {
                if (index > source && index <= destination) {
                    index--;
                }
            }
            else {
                if (index < source && index >= destination) {
                    index++;
                }
            }
            itemMeta![key].index = index;
        });

        itemMeta[id].index = destination;
        setItemMeta(itemMeta);

        void Config.MONITOR_ITEMS.set(itemMeta);
    }

    const onDragEnd = (result: DropResult) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        moveItemTo(result.draggableId, result.source.index, result.destination.index);

        setItems(reorder<GameMonitorItem>(
            items,
            result.source.index,
            result.destination.index
        ));
    }

    const toggleItemVisibility = (item: GameMonitorItem, value: boolean) => {
        const newItemMeta = { ...itemMeta };
        newItemMeta[item.id].visible = value;
        setItemMeta(newItemMeta);
        void Config.MONITOR_ITEMS.set(newItemMeta);
    }

    if (page === 'player') {
        if (items.length === 0 || (enabled && !sidebarOpen)) {
            if (!isCapturing.current) {
                desandbox('StadiaPlusNetworkMonitor.start()');
                isCapturing.current = true;
            }
        }
        else if (isCapturing.current) {
            desandbox('StadiaPlusNetworkMonitor.stop()');
            isCapturing.current = false;
        }
    }

    return (enabled || sidebarOpen) ? <div className={classNames(sidebarOpen && style.sidebarOpen, enabled && style.enabled)}>
        { sidebarOpen &&
            <div className={style.openIcon} onClick={() => setEnabled(true)}>
                <CgTrending size={24} />
            </div>
        }

        <div className={style.gameMonitor}>
            <Loader isLoading={items.length === 0} />

            { items.length ?
                <div className={style.monitor}>
                    <Header
                        visible={sidebarOpen}
                        onClose={() => setEnabled(false)}
                        onGrab={props.onGrab}
                    />
                    <Content
                        editable={sidebarOpen}
                        items={items}
                        itemMeta={itemMeta}
                        dragOffset={{ x: -props.position.x, y: -props.position.y }}
                        onVisibilityToggle={toggleItemVisibility}
                        onDragEnd={onDragEnd}
                    />
                </div> : null
            }
        </div>
    </div> : null;
});

const GameMonitorComponent = () => {
    const [grabbed, setGrabbed] = useState<boolean>(false);

    return ReactDOM.createPortal(
        <PositionController grabbed={grabbed} onRelease={() => setGrabbed(false)}>
            { position =>
                <GameMonitor
                    onGrab={() => {
                        setGrabbed(true);
                    }}
                    position={position}
                />
            }
        </PositionController>,

        document.getElementById('stadiaplus-root')!
    );
};

export default observer(GameMonitorComponent);