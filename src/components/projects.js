import React from "react";

export default class Projects extends React.Component {
  render() {
    return (
      <section className="home__projects d-flex flex-column p-5">
        <h2>{this.props.model.projectTitle}</h2>
        <p>{this.props.model.projectDescription}</p>
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
    );
  }
}