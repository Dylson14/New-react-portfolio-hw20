import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './landingpage'


const Main = () => {
    <Switch>
         <Route exact path="/" component={LandingPage} />
    </Switch>
}