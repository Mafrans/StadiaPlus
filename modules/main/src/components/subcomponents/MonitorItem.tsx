import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { VscGripper } from "react-icons/vsc";
import styled from "styled-components";
import tw from "twin.macro";
import { GameMonitorItem } from "../GameMonitorComponent";

interface IMonitorItemProps {
    sidebarOpen: boolean
    item: GameMonitorItem
    index: number
}

export default class MonitorItem extends React.Component<IMonitorItemProps> {
    constructor(props: any) {
        super(props);
    }
    
    render() {
        return (
            <Draggable key={this.props.item.id} draggableId={this.props.item.id} index={this.props.index}  >
                {(provided, snapshot) => (
                    <Wrapper ref={ provided.innerRef } { ...provided.draggableProps } style={{...provided.draggableProps.style, opacity: this.props.item.visible ? 1 : 0.5 }}>
                        <ItemTitle style={{ fontWeight: 500 }}>{ this.props.item.name }</ItemTitle>
                        <ItemValue style={{ fontWeight: 300 }}>{ this.props.item.value }</ItemValue>
                        
                        {
                            this.props.sidebarOpen ? (
                                <ItemIcons>
                                    <span>
                                        {
                                            this.props.item.visible
                                                ? <AiOutlineEye />
                                                : <AiOutlineEyeInvisible />
                                        }
                                    </span>
                                    <span { ...provided.dragHandleProps } >
                                        <VscGripper/>
                                    </span>
                                </ItemIcons>
                                ): null
                        }
                    </Wrapper>
                )}
            </Draggable>
        );
    }
}


const Wrapper = styled.div`
    ${tw`
        grid
        grid-flow-col
        items-center
        gap-4
        p-4
    `}
`

const ItemIcons = styled.span`
    ${tw`
        flex
        items-center
    `}
    >*:not(:first-child) {
        margin-left: 0.25rem;
    }
`

const ItemTitle = styled.span`
    ${tw`
        inline-flex
        w-32
    `}
`

const ItemValue = styled.span`
    ${tw`
        inline-flex
        w-24
    `}
`