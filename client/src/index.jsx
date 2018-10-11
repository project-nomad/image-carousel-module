import ModalConductor from './components/ModalConductor.jsx';

import flickrInfo from '../../public/passwords.js';


const React = require('react');

const reactDOM = require('react-dom');

const axios = require('axios');

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
    this.handleBackgroundClick = this.handleBackgroundClick.bind(this);
  }

  componentDidMount() {
    this.getData(listingId);
  }

<<<<<<< HEAD
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
          currentPictures: [...this.state.currentPictures, [currCdn, photo.title]],
        });
=======
  async getData (id) {
    try {
      const name = await axios.get(`/listings/${id}`)
        .then(response => response.data[0].name);

      const pictures = await axios.get(`/listings/${id}/pictures`)
      .then(response => response.data);

      this.setState({
        listingName: name,
        currentPictures: pictures,
        backgroundImage: pictures[0].src,
>>>>>>> 2adc3d172b04f070324f741fafb16b157e3c14fc
      });
    } catch(err) {
      console.error(err);
    }
  }

  handleBackgroundClick() {
    this.setState({
      backGroundwasClicked: !this.state.backGroundwasClicked
    });
  }

  render() {
    const AppStyle = {
      width: '100%',
      height: '600px',
<<<<<<< HEAD
      borderStyle: 'solid',
      borderWidth: '5px',
      backgroundSize: 'cover',
      borderColor: 'grey',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'spaceBetween',
    };
    let cleft = 100;
    let ctop = 100;
    let ctrans = `translate('${cleft}px, ${ctop}px')`
    //`translate('${cleft}px, ${ctop}px')`

    const leftSideChildComponent = {
      backgroundImage: `url('${this.state.backgroundImage}')`,
      width: '50%',
      height: '100%',
      margin: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
      overflow: 'hidden',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      paddingBottom: 'auto',

=======
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
>>>>>>> 2adc3d172b04f070324f741fafb16b157e3c14fc
    };

    const middleSideChildComponent = {
      width: '25%',
      height: '100%',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'stretch',
      flexDirection: 'column',
    };

    const rightSideChildComponent = {
      width: '25%',
      height: '100%',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'stretch',
      flexDirection: 'column',
    };
    const pic1 = {
      backgroundImage: `url('${this.state.currentPictures[3]}')`,
      width: '100%',
      height: '100%',
      margin: 'auto',
      overflow: 'hidden',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      paddingBottom: 'auto',
    }

    const pic2 = {
      backgroundImage: `url('${this.state.currentPictures[2]}')`,
      width: '100%',
      height: '100%',
      margin: 'auto',
      overflow: 'hidden',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      paddingBottom: 'auto',
    }

    const pic3 = {
      backgroundImage: `url('${this.state.currentPictures[6]}')`,
      width: '100%',
      height: '100%',
      margin: 'auto',
      overflow: 'hidden',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      paddingBottom: 'auto',
    }

      const pic4 = {
      backgroundImage: `url('${this.state.currentPictures[9]}')`,
      width: '100%',
      height: '100%',
      margin: 'auto',
      overflow: 'hidden',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      paddingBottom: 'auto',
    }


    return (
      <div style={AppStyle}>
        <div style={leftSideChildComponent}>
          <ModalConductor
            onClick={this.handleBackgroundClick}
            name={this.state.listingName}
            currentPictures={this.state.currentPictures}
            backgroundClicked={this.state.backGroundwasClicked}
            backgroundImage={this.state.backgroundImage}

          />
        </div>
        <div style={middleSideChildComponent}>
          <div style={pic1}></div>
          <div style={pic2}></div>
        </div>
        <div style={rightSideChildComponent}>
          <div style={pic3}></div>
          <div style={pic4}></div>
        </div>

      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById('carousel-module'));
