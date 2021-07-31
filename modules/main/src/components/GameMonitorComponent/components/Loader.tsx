import React, { CSSProperties } from "react";
import MDSpinner from "react-md-spinner";
import styled from "styled-components";
import tw from "twin.macro";

export type LoaderProps = {
    isLoading?: boolean;
    spinnerStyle?: CSSProperties; 
    spinnerColor?: string;
    spinnerSize?: number 
}

const Loader = (props:LoaderProps) => (
    <>
    { props.isLoading &&
        <LoaderStyle>
            <MDSpinner 
                size={ props.spinnerSize || 16 } 
                style={{ marginRight: '1rem', ...props.spinnerStyle }} 
                singleColor={ props.spinnerColor || '#ffffff' } 
            />
            <span>Loading Monitor</span>
        </LoaderStyle>
    }
    </>
)

const LoaderStyle = styled.div`
    ${tw`
        flex
        p-2
        items-center
    `}
`

export default Loader;