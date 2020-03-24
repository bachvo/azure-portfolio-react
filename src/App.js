import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./components/about";
import Home from "./components/home";
import WorkExperience from "./components/work-experience";
import Projects from "./components/projects";
import Footer from "./components/footer";
import UnderConstruction from "./components/under-construction";

import { model } from "./models/main";
import "./styles/app.scss";

export default class App extends React.Component {
  render() {
    const isDevMode = process.env.NODE_ENV === "development";
    const devRender = (
      <Router>
        <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
          <Link className="navbar-brand" to="/"><img alt="" className="nav__logo-top-image" src="images/logo-top.png"/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#workexperience">Work Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#projects">Projects</a>
              </li>
            </ul>
            <div className="dropdown">
              <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Contact
              </button>
              <div className="dropdown-menu dropdown-menu-md-left dropdown-menu-lg-right" aria-labelledby="dropdownMenu2">
                {model.contactInfo.map(item => {
                  return (
                    <a key={item.type} className="dropdown-item" href={item.href} target="_blank">{item.type}</a>
                  );
                })}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="resources/resume/bachvo.resume.pdf" target="_blank">Resume</a>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <Switch>
            <Route exact path="/">
              <Home model={model} />
            </Route>
            <Route path="/about">
              <About model={model} />
            </Route>
            <Route path="/workexperience">
              <WorkExperience model={model} />
            </Route>
            <Route path="/projects">
              <Projects model={model} />
            </Route>
          </Switch>
          <Footer model={model} />
        </main>
      </Router>
    );
    const prodRender = <UnderConstruction />;

    const shouldRender = true ? devRender : prodRender;
    return shouldRender;
  }
}
