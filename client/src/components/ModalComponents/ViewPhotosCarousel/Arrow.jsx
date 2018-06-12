import React from 'React';

const FontAwesome = require('react-fontawesome');

const Arrow = ({ direction, clickFunction}) => {
  let icon = null;
  if (direction === 'right') {
    icon = (<FontAwesome
      className="fas fa-angle-right"
      size="7x"
      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    />);
  } else if (direction === 'left') {
    icon = (<FontAwesome
      className="fas fa-angle-left"
      size="7x"
      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    />);
  }

  return (
    <div className={`"Slide-arrow ${direction}`} onClick={clickFunction}>
      {icon}
    </div>
  );
};

export default Arrow;