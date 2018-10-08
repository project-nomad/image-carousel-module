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
      <button type="button" value="Share" onClick={props.click} style={flexBoxStyle}>
        <div>
          <img style={shareStyle} src='https://s3.amazonaws.com/thenomad1/noun.svg' />
        </div>
        <div>
          SHARE
        </div>
      </button>
    </div>
  );
};

export default Share;
