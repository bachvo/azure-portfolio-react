import React from "react";
import { Link } from "react-router-dom";

function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default class CardDetail extends React.Component {
  render() {
    const urlParamId = parseInt(this.props.match.params.id);
    const cardObject = this.props.collection.find(item => item.id === urlParamId);
    const linkToUrl = `/#${this.props.type}`;

    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to={linkToUrl}>{capitalize(this.props.type)}</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{cardObject.title}</li>
          </ol>
        </nav>

        <section className="home__projects d-flex flex-column p-5">
          <div className="container">
            <h2>{cardObject.title}</h2>
            <p>{cardObject.description}</p>
          </div>
        </section>
      </div>
    );
  }
}