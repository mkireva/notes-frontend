import React, {lazy} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {PRODUCT_ROUTE} from "./page-routes";

export const PageRouter = () => (
    <Switch>
        <Route exact path={PRODUCT_ROUTE} component={lazy(()=> import(/* webpackChunkName: "pages/notePage" */'./note/NotePage'))}/>
        <Route exact path={'/'} component={() => <Redirect to={PRODUCT_ROUTE}/>}/>
    </Switch>
);
