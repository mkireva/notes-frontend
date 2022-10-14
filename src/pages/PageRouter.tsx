import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { SCORE_ROUTE } from "./page-routes";
import NotePage from "./note/NotePage";

export const PageRouter = () => (
  <Switch>
    <Route exact path={SCORE_ROUTE} component={NotePage} />
    <Route exact path={"/"} component={() => <Redirect to={SCORE_ROUTE} />} />
  </Switch>
);
