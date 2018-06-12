const React = require('react');

const FontAwesome = require('react-fontawesome');

const buttonStyle = {
  color: 'white',
};

const Share = (props) => {
  return (
    <div style={buttonStyle}>
      <button type="button" value="Share" onClick={props.click}>
        <FontAwesome
          className="fas fa-share-square"
          size="lg"
          name="share"
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
      Share
      </button>
    </div>
  );
};

export default Share;
