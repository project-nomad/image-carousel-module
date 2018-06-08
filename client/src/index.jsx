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
  borderWidth: '2px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderColor: 'grey',
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingName: null,
      currentPictures: [],
    };
  }
  componentDidMount() {
    axios.get('/listings/listingId/5').then((response) => {
      this.setState({
        listingName: response.data[0].name,
      });
      console.log(this.state.listingName);
    }).catch((error) => {
      console.log('we didnt send the request', error);
    });
    axios.get('listings/listingId/5/pictures').then((response) => {
      this.setState({
        currentPictures: response.data,
      });
      console.log(this.state.currentPictures);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div style={AppStyle}>
        <ModalConductor name={this.state.listingName}/>

      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById('App'));
