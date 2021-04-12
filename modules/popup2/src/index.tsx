import ReactDOM from 'react-dom';
import React from 'react';
import 'reset-css';
import '@fontsource/overpass';
import '@fontsource/overpass/300.css';
import '@fontsource/overpass/600.css';
import Router from './Router';
import { StadiaPlusDB } from '../../shared/StadiaPlusDB';

StadiaPlusDB.connect('http://localhost:3000');

ReactDOM.render(
    <Router />,
    document.getElementById('app')
);