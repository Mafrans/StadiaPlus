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
                        <span style={{ fontWeight: 500 }}>{ this.props.item.name }</span>
                        <span style={{ fontWeight: 300 }}>{ this.props.item.value }</span>
                        
                        {
                            this.props.sidebarOpen ? (
                                <span>
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
                                </span>
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
        gap-4
        p-4
    `}
`