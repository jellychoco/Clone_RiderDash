import React, { Fragment } from "react";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import WhatWeDo from "./pages/AboutPageChildrens/WhatWeDo";
import Partners from "./pages/AboutPageChildrens/Partners";
import Contact from "./pages/AboutPageChildrens/Contact";
import Projects from "./pages/AboutPageChildrens/Projects";
import WeHiring from "./pages/WeHiring";
function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/WHATWEDO" component={WhatWeDo} />
        <Route exact path="/PROJECTS" component={Projects} />
        <Route exact path="/PARTNERS" component={Partners} />
        <Route exact path="/CONTACT" component={Contact} />
        <Route exact path="/WE-HIRING" component={WeHiring} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
}

export default App;
