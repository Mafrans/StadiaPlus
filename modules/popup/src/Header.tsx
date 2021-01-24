import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface HeaderProps {
    icon: {
        src: string,
        alt: string,
    },
    title: string,
}

const HeaderWrapper = styled('div')`
    ${tw`
        box-border
        flex
        items-center
    `}
`

const LogoImage = styled('img')`
    ${tw`
        h-6
        mr-2
    `}
`

const LogoHeading = styled('h1')`
    ${tw`
        uppercase
        font-bold
        tracking-wider
        m-0
    `}
    
    background: -webkit-linear-gradient(45deg, #F54F29 0%, #EB4534 30%, #D02C53 70%, #B9166D 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

export default class Header extends React.Component<HeaderProps, any> {
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        return (
            <HeaderWrapper>
                <LogoImage src={this.props.icon.src} alt={this.props.icon.alt}/>
                <LogoHeading>{this.props.title}</LogoHeading>
            </HeaderWrapper>
        );
    }
}