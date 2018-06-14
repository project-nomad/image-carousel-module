import React from 'react';

import Arrow from './Arrow.jsx';

import ImageSlide from './ImageSlide.jsx';

import FlexBox from './FlexBox.jsx';

const AwesomeFont = require('react-fontawesome');

const CarouselStyle = {
  height: '100%',
  margin: '0',
  width: '100%',
};

const ArrowRight = {
  color: '#14B6D4',
  cursor: 'pointer',
  fontSize: '4rem',
  position: 'fixed',
  top: '-10%',
  right: '-40rem',
};

const ArrowLeft = {
  color: '#14B6D4',
  cursor: 'pointer',
  fontSize: '4rem',
  position: 'fixed',
  top: '-10%',
  left: '-47rem',
};
const captionStyles = {
  position: 'fixed',
  top: '100%',
  width: '100%',
  height: '100px',
  color: 'white',
};
const FlexBoxStyle = {
  width: '100%',
  position: 'absolute',
  borderStyle: 'solid',
  margin: '0 auto',
  bottom: '-70%',
};
const showButtonStyle = {
  width: '80px',
  position: 'absolute',
  bottom: '-20%',
  right: '-10%',
};

const hideButtonStyle = {
  width: '80px',
  position: 'absolute',
  bottom: '250%',
  right: '-10%',
};

const upArrowStyle = {
  width: '10px',
  height: '10px',
};

const hideFlexStyle = {
  height: '0px',
}

const transitionsStyle = {
  transitions: '3s',
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      showingFlexBox: true,
    };
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.toggleFlexBox = this.toggleFlexBox.bind(this);
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

  toggleFlexBox() {
    if (this.state.showingFlexBox === false) {
      this.setState({
        showingFlexBox: true,
      });
    } else if (this.state.showingFlexBox === true) {
      this.setState({
        showingFlexBox: false,
      });
    }
  }

  render() {
    let showBox = null;
    if (this.state.showingFlexBox === true) {
      showBox = (
        <div style={FlexBoxStyle}>
          <button style={hideButtonStyle} onClick={this.toggleFlexBox}> hide list
            <img src="https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/uparrow.png" alt="uparrow" style={upArrowStyle} />
          </button>
          <FlexBox currentPictures={this.props.currentPictures} showingBox={this.state.showingFlexBox} style={transitionsStyle} />
        </div>);
    } else if (this.state.showingFlexBox === false) {
      showBox = (
        <div>
          <button style={showButtonStyle} onClick={this.toggleFlexBox}> show list
            <img src="https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/downArrow.png" alt="downarrow" style={upArrowStyle} />
          </button>
          <FlexBox currentPictures={this.props.currentPictures} showingBox={this.state.showingFlexBox} style={transitionsStyle} />
        </div>
      );
    }

    return (
      <div>
        <div className="Carousel" style={CarouselStyle}>
          <div style={CarouselStyle}>
            <ImageSlide url={this.props.currentPictures[this.state.currentImageIndex]} />
          </div>
          <div style={ArrowLeft}>
            <Arrow
              direction="left"
              clickFunction={this.previousSlide}
            />
          </div>
          <div style={ArrowRight}>
            <Arrow
              direction="right"
              clickFunction={this.nextSlide}
            />
          </div>
          <div style={captionStyles}>
            {this.state.currentImageIndex + 1}/{this.props.currentPictures.length} Caption:
            {this.props.currentPictures[this.state.currentImageIndex].caption}
          </div>
        </div>
        {
            showBox
        }
      </div>
    );
  }
}

export default Carousel;
