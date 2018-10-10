import React from 'react';

import ReactImageMagnify from 'react-image-magnify';

import Arrow from './Arrow.jsx';

import ImageSlide from './ImageSlide.jsx';

const CarouselStyle = {
  display: 'flex',
  alignContent: 'column',
  height: '100%',
  margin: '0',
  width: '100%',
};

const ArrowRight = {
  color: '#14B6D4',
  cursor: 'pointer',
  fontSize: '4rem',
  position: 'fixed',
  top: '30%',
  right: '-5%',
};

const ArrowLeft = {
  color: '#14B6D4',
  cursor: 'pointer',
  fontSize: '4rem',
  position: 'fixed',
  top: '30%',
  left: '-5%',
};
const captionStyles = {
  position: 'fixed',
  top: '100%',
  width: '100%',
  height: '100px',
  color: 'white',
};

const zoomInStyle = {
  position: 'fixed',
  top: '110%',
  width: '100%',
  height: '100px',
  color: 'white',
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
    console.log(this.props)
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



  render(){
    let showBox = null;

    return (
      <div>
        <div className="Carousel">
          <div style={CarouselStyle}>
            <div>
              <ImageSlide url={this.props.currentPictures[this.state.currentImageIndex][0]} />
            </div>
          </div>


          <div style={ArrowLeft} onClick={this.previousSlide}>
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
            {this.props.currentPictures[this.state.currentImageIndex][1]}
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
