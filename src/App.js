import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top";
import Nav from "./components/nav";
import Home from "./components/home";
import CardDetail from "./components/card-detail";
import Footer from "./components/footer";
import { ANCHOR } from './utils/constants';
import { model } from "./models/main";
import "./styles/app.scss";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Nav collection={model.contactInfo} />
        <main className="overflow-x-hidden">
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
          <Footer collection={model.contactInfo} fullName={model.profile.fullName} />
        </main>
      </Router>
    );
  }
}