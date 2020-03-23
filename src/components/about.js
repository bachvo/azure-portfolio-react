import React from "react";
import { createMarkup } from '../utils/create-markup';

export default class About extends React.Component {
  render() {
    return (
      <section className="d-flex flex-column align-items-center p-5">
        <h2>{this.props.model.aboutTitle}</h2>
        <img src="images/bach_sm.jpg" height="300" />
        <p className="home__section-description" dangerouslySetInnerHTML={createMarkup(this.props.model.aboutDescription)}></p>
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