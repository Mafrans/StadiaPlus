import React from 'react';
import { Switch, Route, Link, HashRouter } from 'react-router-dom';
import OnboardPage from './pages/OnboardPage';
import HomePage from './pages/HomePage';

export default function Router() {
    return <HashRouter>
        <Switch>
            <Route path={'/home'}>
                <HomePage />
            </Route>
            <Route path={'/'}>
                <OnboardPage />
            </Route>
        </Switch>
    </HashRouter>;
}