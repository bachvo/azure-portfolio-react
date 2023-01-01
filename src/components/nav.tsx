import React from 'react';
import ReactGA from 'react-ga';
import { HashLink } from 'react-router-hash-link';
import { ANCHOR } from '../utils/constants';
import { hashLinkUrl } from '../utils/hash-link-url';
import { Model, Contact } from '../data/model';

interface Props {
  collection: Contact[]
  model: Model
}
export default class Nav extends React.Component<Props> {
  render() {
    const aboutAnchor = hashLinkUrl(ANCHOR.ABOUT);
    const homeAnchor = hashLinkUrl(ANCHOR.HOME);
    const projectsAnchor = hashLinkUrl(ANCHOR.PROJECTS);
    const workexpAnchor = hashLinkUrl(ANCHOR.WORKEXP);

    return (
      <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light nav--z-2">
        <HashLink className="navbar-brand" to={homeAnchor}>
          <img alt="" className="nav__logo-top-image" src="/images/logo-top.png"/>
        </HashLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <HashLink className="nav-link" to={homeAnchor}>Home</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to={aboutAnchor}>About</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to={workexpAnchor}>Work Experience</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to={projectsAnchor}>Projects</HashLink>
            </li>
          </ul>
          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="contactDropdownMenu"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Contact
            </button>
            <div className="dropdown-menu dropdown-menu-md-left dropdown-menu-lg-right" aria-labelledby="contactDropdownMenu">
              {this.props.collection.map(item => {
                return (
                  <div key={item.type}>
                    <ReactGA.OutboundLink
                      eventLabel={item.type}
                      to={item.href}
                      target="_blank"
                      className="dropdown-item"
                    >
                      {item.type}
                    </ReactGA.OutboundLink>
                  </div>
                );
              })}
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/resources/resume/bachvo.resume.pdf" target="_blank">Resume</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}