import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./page/Landing";
import WeatherApp from "./page/Pokemon/";
import Avatar from "./page/Avatar";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/pokemon" exact component={WeatherApp} />
      <Route path="/avatar" exact component={Avatar} />
    </BrowserRouter>
  );
}

export default Routes;
