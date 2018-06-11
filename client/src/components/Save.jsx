const React = require('react');

const buttonStyle = {
  width: '90px',
  color: 'white',
};

const Save = (props) => {
  return (
    <div style={buttonStyle}>
     &#9825; <input type="button" value="Save" onClick={props.click} />
    </div>
  );
};

export default Save;
