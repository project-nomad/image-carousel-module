const React = require('react');

const buttonStyle = {
  width: '90px',
  color: 'white',
};

const imageStyle = {
  width:"10px",
  height:"10px",
   marginRight: '10px',
  // marginLeft: '5px',
};

const textStyle = {
  width: "20px",
  height: "20px",
}

const flexBoxStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  paddingTop: '8px',
  paddingBottom: '8px',
  paddingLeft: '15px',
  paddingRight: '15px',
};


class Save extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      saveIconWasClicked: false,
    };
    this.handleSaveClick = this.handleSaveClick.bind(this)
  }
  handleSaveClick() {
    this.setState({
      saveIconWasClicked: true,
    });
  }

  render() {
    return (
      <div style={buttonStyle}>
        <button
          type="button"
          value="Save"
          onClick={this.props.click}
          style={flexBoxStyle}
        >

        <div>
          <img style={imageStyle} src="https://s3.amazonaws.com/thenomad1/iconmonstr-heart-thin-24.png" />
        </div>
          SAVE
        </button>
      </div>
    );
  }
}

export default Save;
