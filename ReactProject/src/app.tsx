import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Constructor from "./containers/constructor";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/constructor">
          <Constructor />
        </Route>
        <Route>
          <Constructor />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
