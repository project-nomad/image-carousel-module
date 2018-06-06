import Save from './components/Save.jsx';
import ViewPhotos from './components/ViewPhotos.jsx';
import Share from './components/Share.jsx';

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

const SaveStyle = {
  position: 'absolute',
  right: '-95%',
  height: '50px',
  width: '100%',
};

const ViewPhotosStyle = {
  position: 'absolute',
  width: '100%',
  right: '-3%',
  bottom: '30%',
};

const ShareStyle = {
  position: 'absolute',
  right: '-90%',
  height: '50px',
  width: '100%',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    axios.get('/listings/listingId/5').then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log('we didnt send the request', error);
    });
    axios.get('listings/listingId/5/pictures').then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div style={AppStyle}>
        <div style={SaveStyle}>
          <Save />
        </div>
        <div style={ViewPhotosStyle}>
          <ViewPhotos />
        </div>
        <div style={ShareStyle}>
          <Share />
        </div>

      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById('App'));
