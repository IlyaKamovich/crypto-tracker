import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTES } from 'Constants';
import { IRoute } from 'Models';
import _map from 'lodash/map';

import 'Styles/_reset.scss';
import 'Styles/_global.scss';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {_map(ROUTES, (route: IRoute, index: number) => (
        <Route key={index} exact={route.exact} path={route.path} component={route.component} />
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
