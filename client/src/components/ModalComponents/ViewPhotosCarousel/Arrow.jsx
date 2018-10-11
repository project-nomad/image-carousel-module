import React from 'React';

import ReactImageMagnify from 'react-image-magnify';


const Arrow = ({ direction, clickFunction}) => {
  let icon = null;
  if (direction === 'right') {
    icon = (
      <img src="https://s3.amazonaws.com/thenomad1/rarrow.svg" alt="right arrow" />
    );
  } else if (direction === 'left') {
    icon = (
      <img src="https://s3.amazonaws.com/thenomad1/larrow.svg" alt="left arrow" />
    );
  }

  return (
    <div className={`"Slide-arrow ${direction}`} onClick={clickFunction}>
      {icon}
    </div>
  );
};

export default Arrow