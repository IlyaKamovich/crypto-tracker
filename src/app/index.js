import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ROUTES } from "Constants";

import "Styles/_reset.scss";
import "Styles/_global.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        {ROUTES.map((route, index) => (
          <Route key={index} exact={route.exact} path={route.path} component={route.component} />
        ))}
      </Switch>
    </Router>
  );
};

export { App };
