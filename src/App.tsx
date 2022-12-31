import React from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top';
import Nav from './components/nav';
import Home from './components/home';
import CardDetail from './components/card-detail';
import Footer from './components/footer';
import PageNotFound from './components/page-not-found';
import { ANCHOR, API_HOST } from './utils/constants';
import { Model } from './data/model';

interface Props {
  foo: number
}
interface Error {
  state: boolean;
  message?: string;
}

interface State {
  isLoaded: boolean;
  error: Error;
  model: Model
}

export default class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    ReactGA.initialize('UA-69825844-1');
  }

  async componentDidMount() {
    const fullModel = `${API_HOST}/api/main`;

    try {
      const responseData = await fetch(fullModel);
      const jsonData = await responseData.json();
      const data = await jsonData.data as Model;

      this.setState({
        isLoaded: true,
        model: data,
        error: {
          state: false,
        }
      });
    } catch(error) {
      this.setState({
        isLoaded: true,
        error: {
          state: true,
          message: error.message,
        }
      });

      ReactGA.exception({
        description: `Full model API error ocurred: ${error.message}`,
        fatal: true
      });
    }
  }

  render() {
    if (this.state?.error.state) {
      return (
        <div className="alert alert-danger" role="alert">
          Error: {this.state.error.message}
        </div>
      );
    } else if (!this.state ?? !this.state?.isLoaded) {
      return (
        <div className="text-center my-5">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else if (this.state.model && Object.keys(this.state.model).length > 0) {
      return (
        <Router>
          <ScrollToTop />
          {this.state.model.contactInfo && <Nav collection={this.state.model.contactInfo} />}
          <main className="overflow-x-hidden">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (<Home {...props} model={this.state.model}/>)}
              />
              <Route
                path="/workexp/:id"
                render={props => (this.state.model.workExp && <CardDetail {...props} collection={this.state.model.workExp.cards} type={ANCHOR.WORKEXP}/>)}
              />
              <Route
                path="/projects/:id"
                render={props => (this.state.model.projects && <CardDetail {...props} collection={this.state.model.projects.cards} type={ANCHOR.PROJECTS}/>)}
              />
              <Route component={PageNotFound} />
            </Switch>
            {this.state.model.profile && <Footer collection={this.state.model.contactInfo} fullName={this.state.model.profile.fullName} />}
          </main>
        </Router>
      );
    }
  }
}