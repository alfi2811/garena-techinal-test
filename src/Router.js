import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Landing } from './Containers/Index';
import { Provider as ReduxProvider } from 'react-redux';
import configStore from './Modules/Redux/Store';
import './Modules/index.scss';
// import './Modules/fonts.scss';

const reduxStore = configStore()
const ROUTES = require('./Constants/Routes');

const Router = () => {
    return (
        <div className="font-lato">
            <ReduxProvider store={reduxStore}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={ROUTES.LANDING} component={Landing} />                        
                    </Switch>
                </BrowserRouter>
            </ReduxProvider>
        </div>
    )
}

export default Router
