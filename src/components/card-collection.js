import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

export default class CardCollection extends React.Component {
  render() {
    const concatClass = `${this.props.classNames} d-flex flex-column align-items-md-start align-items-lg-center px-2 py-4 p-md-5`
    return (
      <section>
        <a className="nav__anchor" id={this.props.id}></a>
        <div className={concatClass}>
          <h2>{this.props.title}</h2>
          <p className="home__section-description text-md-left text-lg-center pb-4">{this.props.description}</p>
          <div className="row row-cols-1 row-cols-md-4">
            {this.props.cards.map((item, key) => {
              const url = `/${this.props.id}/${item.id}`
              return (
                <Link key={key} to={url}>
                  <div className="col mb-4">
                    <div className="home__card card">
                      <img src={item.imgSrc} className="card-img-top" alt=""/>
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.position}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}