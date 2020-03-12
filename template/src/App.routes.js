import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ENV, Routes } from './constants';
import HomePage from './pages/HomePage/HomePage.lazy';
import TestPage from './pages/TestPage/TestPage.lazy';

const AppRoutes = () => (
  <Switch>
    <Route exact path={Routes.HOME.path} component={HomePage} />

    {ENV !== 'production' && (
      <Route path={Routes.TEST.path} component={TestPage} />
    )}
  </Switch>
);

export default AppRoutes;
