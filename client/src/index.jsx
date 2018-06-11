import ModalConductor from './components/ModalConductor.jsx';

const React = require('react');

const reactDOM = require('react-dom');

const axios = require('axios');

// will have to make this background image a img tag evetually
const AppStyle = {
  margin: 'auto',
  maxWidth: '100%',
  overflow: 'hidden',
  width: '100%',
  height: '600px',
  backgroundImage: `url(${'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room45.jpg'})`,
  borderStyle: 'solid',
  borderWidth: '5px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderColor: 'grey',
  backgroundPosition: 'center bottom',
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingName: null,
      currentPictures: [],
      backGroundwasClicked: false,
      currentId: null,
    };
    this.getData = this.getData.bind(this);
    this.handleBackgroundClick = this.handleBackgroundClick.bind(this);
    this.getCurrentUrl = this.getCurrentUrl.bind(this);
  }


  componentDidMount() {
    this.getCurrentUrl();
  }

  getData(id) {
    console.log(this.state.currentId)
    axios.get('/listings/4').then((response) => {
      this.setState({
        listingName: response.data[0].name,
      });
      console.log(this.state.listingName);
    }).catch((error) => {
      console.log('we didnt send the request', error);
    });
    axios.get('/listings/4/pictures').then((response) => {
      this.setState({
        currentPictures: response.data,
      });
      console.log(this.state.currentPictures);
    }).catch((error) => {
      console.log(error);
    });
  }

  getCurrentUrl() {
    const urlArray = window.location.href.split(':');
    const id = urlArray[urlArray.length - 1];
    this.setState({
      currentId: id,
    }, this.getData());
  }

  handleBackgroundClick() {
    if (this.state.backGroundwasClicked === false) {
      this.setState({
        backGroundwasClicked: true,
      });
    } else if (this.state.backGroundwasClicked === true) {
      this.setState({
        backGroundwasClicked: false,
      })
    }
  }

  render() {
    return (
      <div style={AppStyle}>
        <ModalConductor
          onClick={this.handleBackgroundClick}
          name={this.state.listingName}
          currentPictures={this.state.currentPictures}
          backgroundClicked={this.state.backGroundwasClicked}
        />
      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById('App'));
