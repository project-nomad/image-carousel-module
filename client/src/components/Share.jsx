const React = require('react');

const buttonStyle = {
  color: 'white',

};

const shareStyle = {
  width: '15px',
  height: '12px',
  marginRight: '7px',
  justifyContent: 'center',
};

const flexBoxStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingTop: '8px',
  paddingBottom: '8px',
  paddingLeft: '15px',
  paddingRight: '15px',
};



const Share = (props) => {
  return (
    <div style={buttonStyle}>
<<<<<<< HEAD
      <button type="button" value="Share" onClick={props.click} style={flexBoxStyle}>
          <img style={shareStyle} src='https://s3.amazonaws.com/thenomad1/noun.svg' />
          SHARE
=======
      <button type="button" value="Share" onClick={props.click}>
      <img style={shareStyle} src="https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/share.png" alt="sharebutton" />
          Share
>>>>>>> 2adc3d172b04f070324f741fafb16b157e3c14fc
      </button>
    </div>
  );
};

export default Share;
