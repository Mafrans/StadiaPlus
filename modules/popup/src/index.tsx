import ReactDOM from 'react-dom';
import React from 'react';
import 'tailwindcss/tailwind.css';
import '@fontsource/material-icons';
import '@fontsource/roboto';
import App from './App';


ReactDOM.render(
    <div style={{ fontFamily: '"Roboto", sans-serif' }}>
        <App/>
    </div>,
    document.getElementById('app')
);