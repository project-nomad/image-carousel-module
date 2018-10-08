import ModalConductor from './components/ModalConductor.jsx';


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

    // axios.get(`/listings/${id}`).then((response) => {
    //   this.setState({
    //     listingName: response.data[0].name,
    //   });
    // }).catch((error) => {
    //   console.log('we didnt send the request', error);
    // });



        axios({
          method: 'GET',
          url: 'https://api.flickr.com/services/feeds/photos_public.gne',
          responseType: 'text',
        }).then((res)=>{
          console.log(res)
        })

    // axios.get(`/listings/${id}/pictures`).then((response) => {
    //   this.setState({
    //     currentPictures: response.data,
    //     backgroundImage: response.data[0].src
    //   });
    // }).catch((error) => {
    //   console.log(error);
    // });




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
