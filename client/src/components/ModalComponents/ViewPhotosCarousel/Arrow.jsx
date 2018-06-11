import React from 'React';

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`"Slide-arrow ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
);

export default Arrow;