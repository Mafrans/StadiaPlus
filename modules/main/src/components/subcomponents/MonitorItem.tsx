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

        if(this.props.sidebarOpen && !this.props.item.visible) {
            return null;
        }

        return (
            <Draggable key={this.props.item.id} draggableId={this.props.item.id} index={this.props.index}  >
                {(provided, snapshot) => (
                    <Wrapper 
                        { ...provided.draggableProps } 

                        ref={ provided.innerRef } 
                        style={{
                            ...provided.draggableProps.style, 

                            opacity: this.props.item.visible 
                                ? this.props.sidebarOpen 
                                    ? 1
                                    : 0.75
                                : 0.5 
                        }}
                    >
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