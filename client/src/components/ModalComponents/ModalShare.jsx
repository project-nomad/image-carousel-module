import React from 'react';

const FontAwesome = require('react-fontawesome');

class ModalShare extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isOpen === false) {
        return null;
    }

    const ModalStyle = {
      borderStyle: 'solid',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '400px',
      height: '550px',
      background: 'rgb(255,255,255)',
    };
    if (this.props.width && this.prop.height) {
      ModalStyle.width = this.props.width;
      ModalStyle.height = this.props.height;
      ModalStyle.marginLeft = `-${this.props.width / 2}px`;
      ModalStyle.marginTop = `-${this.props.height / 2}px`;
      ModalStyle.transform = null;
    }

    const backDropStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      background: 'rgba(0,0,0,0.3)',
    };

    const twitterStyle = {
      width: '40px',
      height: '30px',
    };

    const gmailStyle = {
      width: '30px',
      height: '20px',
      bottom: '20%',
    };


    return (
      <div>
        <div style={backDropStyle}></div>
        <div style={ModalStyle}>
          <h3>SHARE</h3>
          <p> Check out this awesome listing on Airbnb: {this.props.name} </p>
          <hr/>
          <div>
            <a href="https://www.facebook.com/" >
              <img style={twitterStyle} src="https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/facebook.jpg" alt="facebook" />

              FACEBOOK
            </a>
          </div>
          <br/>
          <hr />
          <br/>
          <div>
            <a href="https://www.twitter.com/" >
             <img style={twitterStyle} src="https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/twitter.png" alt="twitter" />
              TWITTER
            </a>
          </div>
          <br/>
          <hr />
          <br/>
          <div>
            <a href="https://www.gmail.com/" >
            <img src="https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/gmail.jpg" alt="gmail" style={gmailStyle} />
             GMAIL
            </a>
          </div>
          <br/>
          <hr />
          <br/>
          <div>
            <a href="https://www.facebook.com/" >
             <img src="https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/messenger.png" alt="gmail" style={twitterStyle}/>
              MESSENGER
            </a>
          </div>
          <br/>
          <hr />
          <br/>
          <a href="https://www.facebook.com/" >
            <img src="https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/copy.png" alt="Copy" style={twitterStyle}/>
            COPY LINK
          </a>
          <br/>
          <hr />
          <br/>
          <a href="https://www.facebook.com/" >&#8826;&#8725;&#8827; EMBED</a>
          <br/>
          <hr />
          <br/>
        </div>

      </div>
    );
  }
}

export default ModalShare;

