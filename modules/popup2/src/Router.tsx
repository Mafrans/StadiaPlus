import React from 'react';
import { Switch, Route, Link, HashRouter } from 'react-router-dom';
import OnboardPage from './pages/OnboardPage';

export default function Router() {
    return <HashRouter>
        <Switch>
            <Route path={'/'}>
                <OnboardPage />
            </Route>
        </Switch>
    </HashRouter>;
}