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
<<<<<<< HEAD
  top: '30%',
  right: '-5%',
=======
  top: '-10%',
  right: '-40rem',
>>>>>>> 2adc3d172b04f070324f741fafb16b157e3c14fc
};

const ArrowLeft = {
  color: '#14B6D4',
  cursor: 'pointer',
  fontSize: '4rem',
  position: 'fixed',
<<<<<<< HEAD
  top: '30%',
  left: '-5%',
=======
  top: '-10%',
  left: '-47rem',
>>>>>>> 2adc3d172b04f070324f741fafb16b157e3c14fc
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
<<<<<<< HEAD
  height: '100px',
  color: 'white',
};

=======
  position: 'absolute',
  borderStyle: 'solid',
  margin: '0 auto',
  bottom: '-40%',
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
  bottom: '100%',
  right: '-10%',
};
>>>>>>> 2adc3d172b04f070324f741fafb16b157e3c14fc




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
<<<<<<< HEAD
=======
    if (this.state.showingFlexBox === true) {
      showBox = (
        <div style={FlexBoxStyle}>
          <button style={hideButtonStyle} onClick={this.toggleFlexBox}> hide list
            <img src="https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/uparrow.png" alt="uparrow" style={upArrowStyle} />
          </button>
          <FlexBox currentPictures={this.props.currentPictures} style={FlexBoxStyle}/>
        </div>);
    } else if (this.state.showingFlexBox === false) {
      showBox = (
        <div>
          <button style={showButtonStyle} onClick={this.toggleFlexBox}> show list
            <img src="https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/downArrow.png" alt="downarrow" style={upArrowStyle} />
          </button>
          <FlexBox currentPictures={this.props.currentPictures} style={hideFlexStyle}/>
        </div>
      );
    }
>>>>>>> 2adc3d172b04f070324f741fafb16b157e3c14fc

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
