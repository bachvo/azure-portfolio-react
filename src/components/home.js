import React from 'react';
import CardCollection from './card-collection';
import { createMarkup } from '../utils/create-markup';
import { ANCHOR } from '../utils/constants';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <a className="nav__anchor" id={ANCHOR.HOME}></a>
        <section className="home__intro d-flex flex-column align-items-md-start align-items-lg-center px-2 py-4 p-md-5">
          <h2>{this.props.model.introTitle}</h2>
          <p className="max-width-700-px text-md-left text-lg-center pb-4" dangerouslySetInnerHTML={createMarkup(this.props.model.introDescription)}></p>
          <img alt="" className="home__landing-page-image" src="images/landing_page.png"/>
        </section>

        <a className="nav__anchor" id={ANCHOR.ABOUT}></a>
        <section className="background-section d-flex flex-column align-items-md-start align-items-lg-left px-2 py-4 p-md-5">
          <div className="container d-flex flex-column">
            <div className="d-flex row row-cols-1 row-cols-md-3">
              <div className="card h-100 col-md-3 p-0">
                <img className="card-img-top" alt="" src={this.props.model.profile.imgSrc} width="200" />
                <div className="card-body">
                  <h5 className="card-title">{this.props.model.profile.fullName}</h5>
                  <p className="card-text">{this.props.model.profile.occupation}</p>
                </div>
              </div>
              <div className="col-md-9 pt-4 pt-md-0 pl-0 pl-md-5">
                <h2>{this.props.model.profile.fullName}</h2>
                <p dangerouslySetInnerHTML={createMarkup(this.props.model.profile.description)}></p>
              </div>
            </div>
          </div>
        </section>

        <section className="d-flex flex-column align-items-md-start align-items-lg-center px-2 py-4 p-md-5">
          <div className="d-flex row row-cols-1 row-cols-md-3">
            {this.props.model.profile.skills.map((item, key) => {
              return (
                <div key={key} className="d-flex flex-column align-items-md-start align-items-lg-center col">
                  <img src={item.imgSrc} height="200" width="200" alt=""/>
                  <h3 className="mt-3">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <CardCollection
          classNames="home__workexp"
          id={ANCHOR.WORKEXP}
          model={this.props.model.workExp}
        />

        <CardCollection
          classNames="background-section"
          id={ANCHOR.PROJECTS}
          model={this.props.model.projects}
        />
      </div>
    );
  }
}
