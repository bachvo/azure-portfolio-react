import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import Home from "./components/home";
import CardDetail from "./components/card-detail";
import Footer from "./components/footer";

import { ANCHOR } from './utils/constants';
import { hashLinkUrl } from './utils/hash-link-url';

import { model } from "./models/main";
import "./styles/app.scss";

export default class App extends React.Component {
  render() {
    const aboutAnchor = hashLinkUrl(ANCHOR.ABOUT);
    const homeAnchor = hashLinkUrl(ANCHOR.HOME);
    const projectsAnchor = hashLinkUrl(ANCHOR.PROJECTS);
    const workexpAnchor = hashLinkUrl(ANCHOR.WORKEXP);

    return (
      <Router>
        <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
          <Link className="navbar-brand" to={homeAnchor}>
            <img alt="" className="nav__logo-top-image" src="/images/logo-top.png"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={homeAnchor}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={aboutAnchor}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={workexpAnchor}>Work Experience</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={projectsAnchor}>Projects</Link>
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
            <Route 
              exact
              path="/" 
              render={props => (<Home {...props} model={model}/>)}
            />
            <Route 
              path="/workexp/:id" 
              render={props => (<CardDetail {...props} collection={model.workExp.cards} type={ANCHOR.WORKEXP}/>)}
            />
            <Route 
              path="/projects/:id" 
              render={props => (<CardDetail {...props} collection={model.projects.cards} type={ANCHOR.PROJECTS}/>)}
            />
          </Switch>
          <Footer model={model} />
        </main>
      </Router>
    );
  }
}