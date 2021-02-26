import React from "react";
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { VscGripper } from "react-icons/vsc";
import styled from "styled-components";
import tw from "twin.macro";
import { GameMonitorItem } from "../GameMonitorComponent";

export type MonitorItemProps = {
    editable?: boolean
    item: GameMonitorItem
    index: number
}

const MonitorItem = (props: MonitorItemProps) => (
    <>
    { (props.editable || props.item.visible) &&
        <Draggable key={props.item.id} draggableId={props.item.id} index={props.index} >
        { provided => (
            <Wrapper
                { ...provided.draggableProps }
                ref={ provided.innerRef }

                style={{
                    ...provided.draggableProps.style,

                    opacity: props.item.visible ?
                        props.editable ?
                            1
                            : 0.9
                        : 0.5
                }}
            >
                <ItemTitle style={{ fontWeight: 500 }}>{ props.item.name }</ItemTitle>
                <ItemValue style={{ fontWeight: 300 }}>{ props.item.value }</ItemValue>

                { props.editable && (
                    <ItemIcons>
                        <span>
                            {
                                props.item.visible
                                    ? <AiOutlineEye />
                                    : <AiOutlineEyeInvisible />
                            }
                        </span>

                        <span { ...provided.dragHandleProps } >
                            <VscGripper/>
                        </span>
                    </ItemIcons>
                )}
            </Wrapper>
        )}
        </Draggable>
    }
    </>
)


const Wrapper = styled.div`
    ${tw`
        flex
        p-2
    `}
`

const ItemTitle = styled.span`
    ${tw`
        inline-flex
        font-bold
        w-32
        mr-4
    `}
`

const ItemValue = styled.span`
    ${tw`
        inline-flex
        font-light
        mr-4
    `}
`

const ItemIcons = styled.span`
    ${tw`
        flex
        items-center
        ml-auto
    `}
    >* {
        display: flex;
        align-items: center;

        &:not(:first-child) {
            margin-left: 0.25rem;
        }
    }
`

export default MonitorItem