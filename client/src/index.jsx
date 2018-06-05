import Save from './components/Save.jsx';
import ViewPhotos from './components/ViewPhotos.jsx';
import Share from './components/Share.jsx'

const React = require('react');

const reactDOM = require('react-dom');

const AppStyle = {
  width: '100%',
  height: '600px',
  backgroundImage: `url(${'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room1.jpg'})`,
};

const SaveStyle = {
  position: 'absolute',
  right: '-95%',
  height: '50px',
  width: '100%',
};

const ViewPhotosStyle = {
  position: 'absolute',
  right: '-88%',
  height: '50px',
  width: '100%',
};

const ShareStyle = {
  position: 'absolute',
  width: '100%',
  right: '-3%',
  bottom: '30%',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div style={AppStyle}>
        <div>Image Carousel</div>
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
