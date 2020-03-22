import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./components/about";
import Home from "./components/home";
import WorkExperience from "./components/work-experience";
import Contact from "./components/contact";
import UnderConstruction from "./components/under-construction";
import "./styles/app.scss";

export default class App extends React.Component {
  render() {
    const isDevMode = process.env.NODE_ENV === "development";
    const devRender = (
      <Router>
        <ul className="nav">
          <li>
            <Link to="/"><img alt="" className="nav__logo-top-image" src="images/logo-top.png"/></Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/workexperience">Work Experience</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/workexperience">
            <WorkExperience />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    );
    const prodRender = <UnderConstruction />;

    const shouldRender = isDevMode ? devRender : prodRender;
    return shouldRender;
  }
}
