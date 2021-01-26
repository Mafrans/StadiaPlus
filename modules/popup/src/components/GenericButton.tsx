import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Theme from '../Theme';

interface GenericButtonProps {
    icon?: string,
    onClick?: (event: React.MouseEvent) => void
}

const Button = styled('button')`
    ${tw`
        flex
        items-center
        justify-center
        w-full
        h-11
        border-none
        rounded-lg
        cursor-pointer
    `}
    background-color: ${Theme.LIGHT_GRAY};
    color: ${Theme.CHARCOAL};
`;

const Icon = styled('span')`
    font-family: 'Material Icons', serif;
`

export default class GenericButton extends React.Component<GenericButtonProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Button
                onClick={
                    this.props.onClick !== undefined
                        ? this.props.onClick.bind(this)
                        : undefined
                }
            >
                {
                    this.props.icon !== undefined
                        ? <Icon>{this.props.icon}</Icon> : null
                }
                {this.props.children}
            </Button>
        );
    }
}