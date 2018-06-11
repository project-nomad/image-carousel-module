import React from 'react';

import Arrow from './Arrow.jsx';

import ImageSlide from './ImageSlide.jsx';

const CarouselStyle = {
  height: '100%',
  margin: '0',
  width: '100%',
};

const ArrowRight = {
  color: '#14B6D4',
  cursor: 'pointer',
  fontSize: '2rem',
  position: 'fixed',
  top: '50%',
  right: '1rem',
};

const ArrowLeft = {
  color: '#14B6D4',
  cursor: 'pointer',
  fontSize: '2rem',
  position: 'fixed',
  top: '50%',
  left: '1rem',
};
const captionStyles = {
  position: 'fixed',
  top: '100%',
  width: '100%',
  height: '100px',
  color: 'white',
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }
  previousSlide() {
    const lastIndex = this.props.currentPictures.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    this.setState({
      currentImageIndex: index,
    });
  }
  nextSlide() {
    const lastIndex = this.props.currentPictures.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    this.setState({
      currentImageIndex: index,
    });
  }

  render() {
    return (
      <div className="Carousel" style={CarouselStyle}>
        <div style={CarouselStyle}>
          <ImageSlide url={this.props.currentPictures[this.state.currentImageIndex]} />
        </div>
        <div style={ArrowLeft}>
          <Arrow
            direction="left"
            clickFunction={this.previousSlide}
            glyph="&#9664;"
          />
        </div>
        <div style={ArrowRight}>
          <Arrow
            direction="right"
            clickFunction={this.nextSlide}
            glyph="&#9654;"
          />
        </div>
        <div style={captionStyles}>
          {this.state.currentImageIndex + 1}/{this.props.currentPictures.length} Caption:
          {this.props.currentPictures[this.state.currentImageIndex].caption}
        </div>
      </div>
    );
  }
}

export default Carousel
