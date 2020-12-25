import React from 'react';
import ReactGA from 'react-ga';
import Lightbox from 'react-image-lightbox';

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
          {images.map((img, index) => {
            return (
              <div key={index} className="col p-0">
                <img src={img.thumbnailSrc} alt="" className="gallery__img img-thumbnail" onClick={() => {
                  this.setState({ isOpen: true, photoIndex: index });
                  ReactGA.modalview(`${window.location.pathname}/image/${index}`);
                }}/>
              </div>
            );
          })}
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
            onCloseRequest={() => this.setState({ isOpen: false })}
            imageCaption={images[photoIndex].caption}
            onMovePrevRequest={() => {
              const index = (photoIndex + images.length - 1) % images.length;
              this.setState({
                photoIndex: index,
              });
              ReactGA.event({
                category: 'Gallery Modal',
                action: 'Previous',
                value: index
              });
            }}
            onMoveNextRequest={() => {
              const index = (photoIndex + 1) % images.length;
              this.setState({
                photoIndex: index,
              });
              ReactGA.event({
                category: 'Gallery Modal',
                action: 'Next',
                value: index
              });
            }}
          />
        )}
      </div>
    );
  }
}