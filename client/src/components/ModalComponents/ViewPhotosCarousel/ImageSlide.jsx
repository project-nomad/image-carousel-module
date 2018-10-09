import React from 'react';

const ImageSlide = ({ url }) => {
  //console.log(url)
  const styles = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundImage: `url('${url}')`,
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