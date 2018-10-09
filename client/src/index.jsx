import ModalConductor from './components/ModalConductor.jsx';

import flickrInfo from '../../public/passwords.js';


const React = require('react');

const reactDOM = require('react-dom');

const axios = require('axios');

// will have to make this background image a img tag evetually
const listingId = window.location.pathname.split('/')[2];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingName: null,
      currentPictures: [],
      backGroundwasClicked: false,
      backgroundImage: null,
    };
    this.getData = this.getData.bind(this);
    this.handleBackgroundClick = this.handleBackgroundClick.bind(this);
  }

  componentDidMount() {
    this.getData(listingId);
  }

  getData(id){
  // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

   let urlSession = `https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${flickrInfo.Key}&gallery_id=72157693170803464&format=json&nojsoncallback=1`
    axios.get(urlSession).then((response) => {
      // make cdn for first element; set first element as background image
      const firstEle = `https://farm${response.data.photos.photo[0].farm}.staticflickr.com/${response.data.photos.photo[0].server}/${response.data.photos.photo[0].id}_${response.data.photos.photo[0].secret}.jpg`
      this.setState({
        backgroundImage: firstEle,
      });
      response.data.photos.photo.forEach((photo, index)=>{
        let currCdn =  `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        this.setState({
          currentPictures: [...this.state.currentPictures, currCdn],
        });
      });
    }).catch((error) => {
      console.log(error);
    });
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
    const AppStyle = {
      margin: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
      overflow: 'hidden',
      backgroundImage: `url('${this.state.backgroundImage}')`,
      width: '100%',
      height: '600px',
      borderStyle: 'solid',
      borderWidth: '5px',
      // backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderColor: 'grey',
      backgroundPosition: 'center bottom',
    };

    return (
      <div style={AppStyle}>
        <ModalConductor
          onClick={this.handleBackgroundClick}
          name={this.state.listingName}
          currentPictures={this.state.currentPictures}
          backgroundClicked={this.state.backGroundwasClicked}
          backgroundImage={this.state.backgroundImage}
        />
      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById('carousel-module'));
