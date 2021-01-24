import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface GenericButtonProps {
    icon?: string,
    onClick?: (event: React.MouseEvent) => void
}

const Button = styled('button')`
  ${tw`
        
    `}
`;

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
                {this.props.children}
            </Button>
        );
    }
}