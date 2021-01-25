import React from 'react';
import UpdateIcon, { UpdateStatus } from './UpdateIcon';
import styled from 'styled-components';
import tw from 'twin.macro';

interface UpdatePanelProps {
    status: UpdateStatus,
    title: string,
    description: string,
}

const PanelWrapper = styled('div')`
    ${tw`
        flex
    `}
`;

export default class UpdatePanel extends React.Component<UpdatePanelProps, any> {
    constructor(props: UpdatePanelProps) {
        super(props);
    }

    render() {
        return (
            <PanelWrapper>
                <UpdateIcon status={UpdateStatus.ERRORED} />
                <div>
                    <h3>{ this.props.title }</h3>
                    <p>{ this.props.description }</p>
                </div>
            </PanelWrapper>
        );
    }
}