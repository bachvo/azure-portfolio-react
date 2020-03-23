import React from "react";
import { createMarkup } from '../utils/create-markup';

export default class About extends React.Component {
  render() {
    return (
      <section className="container d-flex flex-column p-5">
        <div className="d-flex">
          <div className="home__card card h-100">
            <img className="card-img-top" alt="" src="images/bach_sm.jpg" width="300" />
            <div className="card-body">
              <h5 className="card-title">Bach Vo</h5>
              <p className="card-text">Software Engineer</p>
            </div>
          </div>
          <div className="d-flex flex-column ml-5">
          <h2>{this.props.model.aboutTitle}</h2>
          <p dangerouslySetInnerHTML={createMarkup(this.props.model.aboutDescription)}></p>
          </div>
        </div>
        <div className="d-flex row row-cols-1 row-cols-md-3">
          {this.props.model.aboutMeSkills.map((item, key) => {
            return (
              <div key={key} className="d-flex flex-column align-items-center col">
                <img src={item.imgSrc} height="200" width="200" alt=""/>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}