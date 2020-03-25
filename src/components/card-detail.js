import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { ANCHOR } from '../utils/constants';
import { capitalize } from '../utils/capitalize';
import { hashLinkUrl } from '../utils/hash-link-url';
import { isMediaVideo } from '../utils/is-media-video';

export default class CardDetail extends React.Component {
  render() {
    const urlParamId = parseInt(this.props.match.params.id);
    const cardObject = this.props.collection.find(item => item.id === urlParamId);
    const linkToUrl = hashLinkUrl(this.props.type);
    const homeAnchor = hashLinkUrl(ANCHOR.HOME);

    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={homeAnchor}>{capitalize(ANCHOR.HOME)}</Link></li>
            <li className="breadcrumb-item"><Link to={linkToUrl}>{capitalize(this.props.type)}</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{cardObject.title}</li>
          </ol>
        </nav>

        <section className="home__projects d-flex flex-column px-2 py-4 p-md-5">
          <div className="container">
            <div className="row row-cols-1">
            <div className="col col-md-4">
              <div className="card">
                {isMediaVideo(cardObject.mainMedia) 
                  ? <video src={cardObject.mainMedia} className="card-img-top" controls={true}/>
                  : <img src={cardObject.mainMedia} className="card-img-top" alt=""/>
                }
                <div className="card-body">
                  <h5 className="card-title">
                    <a href={cardObject.website} target="_blank">{cardObject.title}</a>
                  </h5>
                  <p className="card-text">{cardObject.position}</p>
                </div>
              </div>
            </div>
            <div className="col col-md-8 pt-4 pt-md-0">
              <h2>{cardObject.title}</h2>
              <p>{cardObject.description}</p>
              <hr/>
              <h5 className="card-detail__sub-heading">Title</h5>
              <p>{cardObject.position}</p>
              <h5 className="card-detail__sub-heading">Role</h5>
              <p>{cardObject.role}</p>
              <h5 className="card-detail__sub-heading">Skills</h5>
              <p>
                {cardObject.skills.map((skill, index) => {
                  if (index === cardObject.skills.length - 1) {
                    return skill;
                  } 
                  return `${skill}, `;
                })}
              </p>
            </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}