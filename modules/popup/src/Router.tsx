import React from 'react';
import { Switch, Route, Link, HashRouter } from 'react-router-dom';
import OnboardPage from './pages/OnboardPage';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

export default function Router() {
    return <HashRouter>
        <Switch>
            <Route exact path={'/home'}>
                <HomePage />
            </Route>
            <Route exact path={'/settings'}>
                <SettingsPage />
            </Route>
            <Route exact path={'/'}>
                <OnboardPage />
            </Route>
        </Switch>
    </HashRouter>;
}