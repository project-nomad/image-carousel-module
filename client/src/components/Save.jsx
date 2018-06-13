const React = require('react');

const buttonStyle = {
  width: '90px',
  color: 'white',
};

const imageStyle = {
  width:"10px",
  height:"10px",
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
        >
          <img style={imageStyle} src="https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/heart.png" alt="save" />
        SAVE
        </button>
      </div>
    );
  }
}

export default Save;
