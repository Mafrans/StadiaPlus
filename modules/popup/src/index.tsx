import ReactDOM from 'react-dom';
import React from 'react';
import 'reset-css';
import 'tailwindcss/tailwind.css';
import '@fontsource/material-icons';
import '@fontsource/roboto';
import App from './App';
import styled from 'styled-components';

const GlobalWrapper = styled('div')`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
`

ReactDOM.render(
    <GlobalWrapper>
        <App/>
    </GlobalWrapper>,
    document.getElementById('app')
);