import React from "react"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import { GameMonitorItem } from "../GameMonitorComponent"
import MonitorItem from './MonitorItem';

export type ContentProps = {
    onDragEnd?: (result: DropResult) => void
    items: GameMonitorItem[]
    editable?: boolean
} 

const Content = (props: ContentProps) => {
    return (
        <DragDropContext onDragEnd={props.onDragEnd!}>
            <Droppable droppableId="list">
                {
                    provided => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            { props.items.map((item, index) =>
                                <MonitorItem editable={props.editable} index={index} item={item} />
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