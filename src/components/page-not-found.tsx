import React from 'react';
import ReactGA from 'react-ga';

export default class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
    ReactGA.pageview(`${window.location.pathname}`);
  }

  render() {
    return (
      <div className="background-section">
        <div className="container p-5">
          <h1 className="text-center">Oops! Page not found</h1>
        </div>
      </div>
    );
  }
}