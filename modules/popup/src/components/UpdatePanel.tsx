import React from 'react';
import UpdateIcon, { UpdateStatus } from './UpdateIcon';
import styled from 'styled-components';
import tw from 'twin.macro';
import Theme from '../Theme';

interface UpdatePanelProps {
    status: UpdateStatus,
    title: string,
    description: string,
}

const PanelWrapper = styled('div')`
    ${tw`
        mb-4
        p-4
        box-border
        rounded-lg
    `}
  border: ${Theme.LIGHT_GRAY} 2px solid;
`

const PanelInfo = styled('div')`
    ${tw`
        flex
        items-center
    `}
`;

const InfoHeading = styled('h3')`
    ${tw`
        text-lg
    `}
    color: ${Theme.CHARCOAL}
`;

const InfoSubheading = styled('p')`
    ${tw`
        text-sm
    `}
    color: ${Theme.GRAY}
`;

export default class UpdatePanel extends React.Component<UpdatePanelProps, any> {
    constructor(props: UpdatePanelProps) {
        super(props);
    }

    render() {
        return (
            <PanelWrapper>
                <PanelInfo>
                    <UpdateIcon status={UpdateStatus.ERRORED} />
                    <div>
                        <InfoHeading>{ this.props.title }</InfoHeading>
                        <InfoSubheading>{ this.props.description }</InfoSubheading>
                    </div>
                </PanelInfo>
            </PanelWrapper>
        );
    }
}