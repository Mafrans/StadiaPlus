import ReactDOM from 'react-dom';
import React from 'react';
import 'reset-css';
import './assets/css/global.css';
import 'tailwindcss/tailwind.css';
import '@fontsource/material-icons';
import '@fontsource/roboto';
import '@fontsource/roboto/500';
import Router from './Router';

ReactDOM.render(
    <Router />,
    document.getElementById('app')
);