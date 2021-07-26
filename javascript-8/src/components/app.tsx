import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ForecastWeatherInCity } from "../containers/forecastWeatherInCity";

import { WeatherMainFrom } from "../containers/weatherMainForm";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/city/:city/:cnt">
          <ForecastWeatherInCity />
        </Route>
        <Route path="/city/:city">
          <ForecastWeatherInCity />
        </Route>
        <Route>
          <WeatherMainFrom />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
