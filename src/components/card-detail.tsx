import React from 'react';
import ReactGA from 'react-ga';
import { useParams } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { ANCHOR } from '../utils/constants';
import { capitalize } from '../utils/capitalize';
import { hashLinkUrl } from '../utils/hash-link-url';
import { isMediaVideo } from '../utils/is-media-video';
import { Card } from '../data/model';
import Gallery from './gallery';

interface Props {
  type: string
  collection: Card[]
}

const CardDetail = (props: Props) => {
  ReactGA.pageview(`${window.location.pathname}`);
  const { id } = useParams<'id'>();
  const _id = id ?? '';

  const maxCollection = 4;
  const urlParamId = parseInt(_id);
  const cardObject = props.collection.find(item => item.cardId === urlParamId) as Card;
  const linkToUrl = hashLinkUrl(props.type);
  const homeAnchor = hashLinkUrl(ANCHOR.HOME);
  const hasGallery = cardObject.gallery.length > 0;

  // next and previous controls
  const nextId = parseInt(_id)+ 1;
  const prevId = parseInt(_id) - 1;
  const useNextId = nextId > maxCollection ? 1 : nextId;
  const usePrevId = prevId < 1 ? maxCollection : prevId;
  const nextUrl = `/${props.type}/${useNextId}`;
  const prevUrl = `/${props.type}/${usePrevId}`;

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <li className="breadcrumb-item"><HashLink to={homeAnchor}>{capitalize(ANCHOR.HOME)}</HashLink></li>
            <li className="breadcrumb-item"><HashLink to={linkToUrl}>{capitalize(props.type)}</HashLink></li>
            <li className="breadcrumb-item active" aria-current="page">{cardObject.title}</li>
          </div>
          <div>
            <HashLink className="pr-2" to={prevUrl}>Previous</HashLink>/<HashLink className="pl-2" to={nextUrl}>Next</HashLink>
          </div>
        </ol>
      </nav>

      <section className="background-section d-flex flex-column px-2 py-4 p-md-5">
        <div className="container">
          <div className="row row-cols-1">
          <div className="col col-md-4">
            <div className="card">
              {isMediaVideo(cardObject.mainMedia)
                ? <video src={cardObject.mainMedia} className="card-img-top" controls={true} playsInline={true}/>
                : <img src={cardObject.mainMedia} className="card-img-top" alt=""/>
              }
              <div className="card-body">
                <h5 className="card-title">
                  <a href={cardObject.website} target="_blank">{cardObject.title}</a>
                </h5>
                <p className="card-text">{cardObject.position}</p>
              </div>
            </div>
            {hasGallery && (
              <Gallery images={cardObject.gallery}/>
            )}
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
            <p>{cardObject.skills}</p>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CardDetail;