import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top';
import Nav from './components/nav';
import Home from './components/home';
import CardDetail from './components/card-detail';
import Footer from './components/footer';
import PageNotFound from './components/page-not-found';
import { ANCHOR, API_HOST } from './utils/constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      model: {}
    };
  }

  componentDidMount() {
    const mainModel = `${API_HOST}/api/main`;
    fetch(mainModel)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            model: result.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, model } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
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
              <Route component={PageNotFound} />
            </Switch>
            <Footer collection={model.contactInfo} fullName={model.profile.fullName} />
          </main>
        </Router>
      );
    }
  }
}