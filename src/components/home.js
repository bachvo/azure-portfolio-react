import React from "react";
import CardCollection from "./card-collection";
import { createMarkup } from '../utils/create-markup';
import { ANCHOR } from '../utils/constants';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <section className="home d-flex flex-column align-items-md-start align-items-lg-center p-5">
          <h2>{this.props.model.introTitle}</h2>
          <p className="home__section-description text-md-left text-lg-center pb-4" dangerouslySetInnerHTML={createMarkup(this.props.model.introDescription)}></p>
          <img alt="" className="home__landing-page-image" src="images/landing_page.png"/>
        </section>

        <a className="nav__anchor" id="about"></a>
        <section className="home__projects d-flex flex-column align-items-md-start align-items-lg-left p-5">
          <div className="container d-flex flex-column">
            <div className="d-flex row row-cols-1 row-cols-md-3">
              <div className="card h-100 col-md-3 p-0">
                <img className="card-img-top" alt="" src="images/bach_small.jpg" width="200" />
                <div className="card-body">
                  <h5 className="card-title">Bach Vo</h5>
                  <p className="card-text">Software Engineer</p>
                </div>
              </div>
              <div className="col-md-9 pt-4 pt-md-0 pl-0 pl-md-5">
                <h2>{this.props.model.aboutTitle}</h2>
                <p dangerouslySetInnerHTML={createMarkup(this.props.model.aboutDescription)}></p>
                <p>{this.props.model.aboutSkills}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="d-flex flex-column align-items-md-start align-items-lg-center p-5">
          <div className="d-flex row row-cols-1 row-cols-md-3">
            {this.props.model.aboutMeSkills.map((item, key) => {
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
          title={this.props.model.workExpTitle}
          description={this.props.model.workExpDescription}
          cards={this.props.model.workExpCards}
        />

        <CardCollection
          classNames="home__projects"
          id={ANCHOR.PROJECTS}
          title={this.props.model.projectTitle}
          description={this.props.model.projectDescription}
          cards={this.props.model.projectCards}
        />
      </div>
    );
  }
}
