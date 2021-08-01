import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { clamp } from '../../../Util';

type PositionControllerType = {
    grabbed: boolean
    onRelease: () => void
    children: (position: {x: number, y: number}) => ReactElement
}

const PositionController = (props: PositionControllerType) => {
    const rootElement = useRef<HTMLDivElement | null>();
    let [position, setPosition] = useState<{x: number, y: number}>({x: 0, y: 0});

    let left:   number | 'initial' = position.x;
    let top:    number | 'initial' = position.y;
    let right:  number | 'initial' = 'initial';
    let bottom: number | 'initial' = 'initial';

    const bounds: {x: number, y: number} = {
        x: window.innerWidth - (rootElement.current?.offsetWidth ?? 0),
        y: window.innerHeight - (rootElement.current?.offsetHeight ?? 0)
    }

    if (position.x >= bounds.x) {
        right = 0;
        left = 'initial';
    }

    if (position.y >= bounds.y) {
        bottom = 0;
        top = 'initial';
    }

    useEffect(() => {
        if (!props.grabbed) return;
        let grabPos: {x: number, y: number} | null = null;

        const onMove = (event: MouseEvent) => {
            if (!grabPos) {
                grabPos = { x: event.x - position.x, y: event.y - position.y }
            }

            position = {
                x: clamp(event.pageX - (grabPos?.x ?? 0), 0, bounds.x),
                y: clamp(event.pageY - (grabPos?.y ?? 0), 0, bounds.y)
            };

            setPosition(position);
        }

        const onRelease = () => {
            props.onRelease();

            removeEventListener('mousemove', onMove);
            removeEventListener('mouseup', onRelease);
        }

        addEventListener('mousemove', onMove);
        addEventListener('mouseup', onRelease);
    }, [props.grabbed]);

    return <div
        ref={ref => rootElement.current = ref}
        style={{left, right, top, bottom, position: 'absolute', zIndex: 200 }}
    >
        { props.children(position) }
    </div>
}

export default PositionController;