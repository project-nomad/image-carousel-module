const React = require('react');
const FontAwesome = require('react-fontawesome');

const buttonStyle = {
  width: '90px',
  color: 'white',
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
    const saveIcon = (<FontAwesome
      className="far fa-heart"
      name="heart"
      size="lg"
      style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    />);

    return (
      <div style={buttonStyle}>
        <button
          type="button"
          value="Save"
          onClick={this.props.click}
        >
        {saveIcon}
        SAVE
        </button>
      </div>
    );
  }
}

export default Save;
