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
      model: {},
    };
  }

  componentDidMount() {
    const fullModel = `${API_HOST}/api/main`;
    const liteModel = `${API_HOST}/api/main-lite`;

    fetch(liteModel)
      .then(res => res.json())
      .then(
        (result) => {
          // if full model returns first, do not reset model
          if (!this.state.model.profile) {
            this.setState({
              isLoaded: true,
              model: result.data
            });
          }
        },
        (error) => {
          // if full model returns first, do not show error
          if (!this.state.model.profile) {
            this.setState({
              isLoaded: true,
              error
            });
          }
        }
      )

    fetch(fullModel)
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
      return (
        <div className="alert alert-danger" role="alert">
          Error: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="text-center my-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else {
      return (
        <Router>
          <ScrollToTop />
          {model.contactInfo && <Nav collection={model.contactInfo} />}
          <main className="overflow-x-hidden">
            <Switch>
              <Route 
                exact
                path="/" 
                render={props => (<Home {...props} model={model}/>)}
              />
              <Route 
                path="/workexp/:id" 
                render={props => (model.workExp && <CardDetail {...props} collection={model.workExp.cards} type={ANCHOR.WORKEXP}/>)}
              />
              <Route 
                path="/projects/:id" 
                render={props => (model.projects && <CardDetail {...props} collection={model.projects.cards} type={ANCHOR.PROJECTS}/>)}
              />
              <Route component={PageNotFound} />
            </Switch>
            {model.profile && <Footer collection={model.contactInfo} fullName={model.profile.fullName} />}
          </main>
        </Router>
      );
    }
  }
}