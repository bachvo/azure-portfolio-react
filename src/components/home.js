import React from "react";

import { createMarkup } from '../utils/create-markup';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="home d-flex flex-column align-items-md-start align-items-lg-center p-5">
          <h2>{this.props.model.introTitle}</h2>
          <p className="home__section-description text-md-left text-lg-center pb-4" dangerouslySetInnerHTML={createMarkup(this.props.model.introDescription)}></p>
          <img alt="" className="home__landing-page-image" src="images/landing_page.png"/>
        </section>

        <section className="d-flex flex-column align-items-md-start align-items-lg-center p-5">
          <h2>{this.props.model.aboutTitle}</h2>
          <p className="home__section-description text-md-left text-lg-center pb-4" dangerouslySetInnerHTML={createMarkup(this.props.model.aboutDescription)}></p>
          <div className="d-flex row row-cols-1 row-cols-md-3">
            {this.props.model.aboutMeSkills.map((item, key) => {
              return (
                <div key={key} className="d-flex flex-column align-items-md-start align-items-lg-center col">
                  <img src={item.imgSrc} height="200" width="200" alt=""/>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="home__workexp d-flex flex-column align-items-md-start align-items-lg-center p-5">
          <h2>{this.props.model.workExpTitle}</h2>
          <p className="home__section-description text-md-left text-lg-center pb-4">{this.props.model.workExpDescription}</p>
          <div className="row row-cols-1 row-cols-md-4">
            {this.props.model.workExpCards.map((item, key) => {
              return (
                <div key={key} className="col mb-4">
                  <div className="home__card card h-100">
                    <img src={item.imgSrc} className="card-img-top" alt=""/>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.position}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="home__projects d-flex flex-column align-items-md-start align-items-lg-center p-5">
          <h2>{this.props.model.projectTitle}</h2>
          <p className="home__section-description text-md-left text-lg-center pb-4">{this.props.model.projectDescription}</p>
          <div className="row row-cols-1 row-cols-md-4">
            {this.props.model.projectCards.map((item, key) => {
              return (
                <div key={key} className="col mb-4">
                  <div className="home__card card h-100">
                    <img src={item.imgSrc} className="card-img-top" alt=""/>
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.position}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}
