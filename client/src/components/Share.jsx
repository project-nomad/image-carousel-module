const React = require('react');

const buttonStyle = {
  color: 'white',
};

const Share = (props) => {
  return (
    <div style={buttonStyle}>
      &#10132; <input type="button" value="Share" onClick={props.click} />
    </div>
  );
};

export default Share;
