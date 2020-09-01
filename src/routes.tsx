import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Landing from "./page/Landing";
import Pokemon from "./page/Pokemon/";
import Avatar from "./page/Avatar";
import Cats from "./page/Cats";
import Naruto from "./page/Naruto";

function Routes() {
  return (
    <HashRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/pokemon" exact component={Pokemon} />
      <Route path="/avatar" exact component={Avatar} />
      <Route path="/cats" exact component={Cats} />
      <Route path="/naruto" exact component={Naruto} />
    </HashRouter>
  );
}

export default Routes;
