import React from 'react';

import Carousel from './ViewPhotosCarousel/Carousel.jsx';

import FlexBox from './ViewPhotosCarousel/FlexBox.jsx';


const ModalViewPhotos = (props) => {
  // will eventually pass down the array of objects
  if (props.isOpen === false) {
    return null;
  }
  const ModalStyle = {
    borderStyle: 'solid',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '400px',
    background: 'rgb(255,255,255)',
  };

  const backDropStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    background: 'rgba(0,0,0,0.3)',
  };
  const FlexBoxStyle = {
    position: 'absolute',
    borderStyle: 'solid',
    margin: '0 auto',
    bottom: '26%',
    right: '6%',
  };

  return (
    <div>
      <div style={backDropStyle}></div>
      <div style={ModalStyle}>
        <Carousel currentPictures={props.currentPictures} />
      </div>
      <div style={FlexBoxStyle}>
        <FlexBox currentPictures={props.currentPictures} />
      </div>
    </div>
  );
};

export default ModalViewPhotos;
