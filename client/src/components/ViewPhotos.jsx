const React = require('react');


const ViewPhotos = (props) => {



  return (
    <div>
      <div>
        <button id="VIEW PHOTOS" value="ViewPhotos" onClick={props.click}>
          VIEW PHOTOS
        </button>
      </div>
    </div>
  );
};

export default ViewPhotos;
