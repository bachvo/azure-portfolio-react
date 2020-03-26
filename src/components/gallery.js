import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
 
export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
    const images = this.props.images;
    return (
      <div>
        <hr/>
        <div className="row row-cols-3 px-3">
          {images.map((imgSrc, index) => {
            return (
              <div key={index} className="col p-0">
                <img src={imgSrc} alt="" className="gallery__img img-thumbnail" onClick={() => this.setState({ isOpen: true, photoIndex: index })}/>
              </div>
            );
          })}
        </div>
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}