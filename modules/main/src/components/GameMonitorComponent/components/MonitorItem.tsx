import React from "react";
import { Draggable} from 'react-beautiful-dnd';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { VscGripper } from "react-icons/vsc";
import { GameMonitorItem } from "../GameMonitorComponent";
import style from '../game-monitor-component.css';
import classNames from 'classnames';

export type MonitorItemProps = {
    editable?: boolean
    item: GameMonitorItem
    visible: boolean
    index: number
    offset: { x: number, y: number },
    onVisibilityToggle?: (value: boolean) => void
}

const MonitorItem = (props: MonitorItemProps) => {
    return (props.editable || props.visible) ? <Draggable key={props.item.id} draggableId={props.item.id} index={props.index} >
        { (provided, snapshot) => (
            <div
                className={classNames(style.monitorItem, props.visible && style.visible)}
                ref={ provided.innerRef }

                { ...provided.draggableProps }
                style={{
                    ...provided.draggableProps.style,
                    marginLeft: snapshot.isDragging ? props.offset.x : 0,
                    marginTop: snapshot.isDragging ? props.offset.y : 0
                }}
            >
                <strong style={{ fontWeight: 500 }}>{ props.item.name }</strong>
                <p style={{ fontWeight: 300 }}>{ props.item.value }</p>

                { props.editable && (
                    <div className={style.icons}>
                        <span className={style.visibilityIcon} onClick={() => props.onVisibilityToggle!(!props.visible)}>
                            { props.visible ?
                                <AiOutlineEye />
                                : <AiOutlineEyeInvisible />
                            }
                        </span>

                        <span { ...provided.dragHandleProps } >
                    <VscGripper/>
                </span>
                    </div>
                )}
            </div>
        )}
    </Draggable> : null;
}

export default MonitorItem