import React from "react"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import { GameMonitorItem } from "../GameMonitorComponent"
import MonitorItem from './MonitorItem';

export type ContentProps = {
    onDragEnd?: (result: DropResult) => void
    items: GameMonitorItem[]
    editable?: boolean
    dragOffset: { x: number, y: number },
    onVisibilityToggle?: (item: GameMonitorItem, value: boolean) => void
} 

const Content = (props: ContentProps) => {
    return (
        <DragDropContext onDragEnd={props.onDragEnd!}>
            <Droppable droppableId="list">
                {
                    provided => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            { props.items.map((item, index) =>
                                <MonitorItem
                                    onVisibilityToggle={(value) => props.onVisibilityToggle!(item, value)}
                                    editable={props.editable}
                                    index={index}
                                    item={item}
                                    offset={props.dragOffset}
                                />
                            )}
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </DragDropContext>
    )
}
export default Content