const React = require('react');

const Share = (props) => {
  return (
    <div>
      <input type="button" value="Share" onClick={props.click} />
    </div>
  );
};

export default Share;
