import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Collection } from '../data/model';
interface Props {
  classNames: string
  id: string
  model: Collection
}
export default class CardCollection extends React.Component<Props> {
  render() {
    const concatClass = `${this.props.classNames} d-flex flex-column align-items-md-start align-items-lg-center px-2 py-4 p-md-5`
    return (
      <section>
        <a className="nav__anchor" id={this.props.id}></a>
        <div className={concatClass}>
          <h2>{this.props.model.title}</h2>
          <p className="max-width-700-px text-md-left text-lg-center pb-4">{this.props.model.description}</p>
          <div className="row row-cols-1 row-cols-md-4">
            {this.props.model.cards.map((item, key) => {
              const url = `/${this.props.id}/${item.cardId}`
              return (
                <Link key={key} to={url}>
                  <div className="col mb-4">
                    <div className="card-collection__text-black card">
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