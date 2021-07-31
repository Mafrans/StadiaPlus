import React from "react"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import { GameMonitorItem, GameMonitorItemMeta } from '../GameMonitorComponent';
import MonitorItem from './MonitorItem';

export type ContentProps = {
    onDragEnd?: (result: DropResult) => void
    items: GameMonitorItem[]
    itemMeta: GameMonitorItemMeta | null
    editable?: boolean
    dragOffset: { x: number, y: number },
    onVisibilityToggle?: (item: GameMonitorItem, value: boolean) => void
} 

const Content = (props: ContentProps) => {
    const sortedItems = props.items.sort((a, b) => (props.itemMeta?.[a.id]?.index ?? 0) - (props.itemMeta?.[b.id]?.index ?? 0));

    return (
        <DragDropContext onDragEnd={props.onDragEnd!}>
            <Droppable droppableId="list">
                {
                    provided => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            { sortedItems.map((item, index) =>
                                <MonitorItem
                                    onVisibilityToggle={(value) => props.onVisibilityToggle!(item, value)}
                                    editable={props.editable}
                                    index={index}
                                    item={item}
                                    visible={props.itemMeta?.[item.id]?.visible ?? false}
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