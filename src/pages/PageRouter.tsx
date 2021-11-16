import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { PRODUCT_ROUTE} from "./page-routes";
import NotePage from "./note/NotePage";

export const PageRouter = () => (
    <Switch>
        <Route exact path={PRODUCT_ROUTE} component={NotePage}/>
        <Route exact path={'/'} component={() => <Redirect to={PRODUCT_ROUTE}/>}/>
    </Switch>
);
