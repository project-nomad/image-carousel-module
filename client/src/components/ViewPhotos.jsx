const React = require('react');


const ViewPhotos = (props) => {

  return (
    <div>
      <input type="button" id="VIEW PHOTOS" value="View Photos" onClick={props.click} />
    </div>
  );
};

export default ViewPhotos;
