import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export class UpdateStatus {
    static WAITING: UpdateStatus = {
        icon: 'more_horiz',
        iconColor: '#BFC1CC',
        iconBackground: '#E9EAEF',
        buttonIcon: 'play_arrow',
        buttonText: 'Start Stadia',
        buttonTextColor: '#ffffff',
        buttonBackground: '-webkit-linear-gradient(45deg, #F54F29 0%, #EB4534 30%, #D02C53 70%, #B9166D 100%)',
    };
    static DO_UPDATE: UpdateStatus = {
        icon: 'priority_high',
        iconColor: '#D39A29',
        iconBackground: '#FFEAB4',
        buttonIcon: 'sync',
        buttonText: 'Update Now',
        buttonTextColor: '#ffffff',
        buttonBackground: '-webkit-linear-gradient(45deg, #F54F29 0%, #EB4534 30%, #D02C53 70%, #B9166D 100%)',
    };
    static ERRORED: UpdateStatus = {
        icon: 'close',
        iconColor: '#DF5151',
        iconBackground: '#FFDEDE',
        buttonIcon: 'refresh',
        buttonText: 'Try Again',
    };
    static DONE: UpdateStatus = {
        icon: 'done',
        iconColor: '#66C164',
        iconBackground: '#D2FFD1',
        buttonIcon: 'refresh',
        buttonText: 'Update Again',
    };

    icon!: string;
    iconColor!: string;
    iconBackground!: string;
    buttonIcon!: string;
    buttonText!: string;
    buttonTextColor?: string;
    buttonBackground?: string;
}

interface UpdateIconProps {
    status: UpdateStatus,
}

const IconWrapper = styled('div')`
    ${tw`
        rounded-full
        w-7 h-7
        box-border
        p-0.5
        mr-4
    `}
`

const Icon = styled('span')`
    font-size: 1.5rem;
    font-family: 'Material Icons', serif;
`

export default class UpdateIcon extends React.Component<UpdateIconProps, any> {
    constructor(props: UpdateIconProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <IconWrapper style={{ backgroundColor: this.props.status.iconBackground }}>
                    <Icon style={{ color: this.props.status.iconColor }}>{ this.props.status.icon }</Icon>
                </IconWrapper>
            </div>
        );
    }
}