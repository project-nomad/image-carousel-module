const React = require('react');

const buttonStyle = {
  color: 'white',
};

const shareStyle = {
  width: '15px',
  height: '12px',
};


const Share = (props) => {
  return (
    <div style={buttonStyle}>
      <button type="button" value="Share" onClick={props.click}>
      <img style={shareStyle} src="https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/share.png" alt="sharebutton" />
        SHARE
      </button>
    </div>
  );
};

export default Share;
