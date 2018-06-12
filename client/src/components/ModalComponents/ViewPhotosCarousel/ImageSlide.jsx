import React from 'react';

const ImageSlide = ({ url }) => {
  const styles = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundImage: `url('${url.src}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div>
      <div className="image-slide" style={styles}></div>
    </div>
  );
};

export default ImageSlide;