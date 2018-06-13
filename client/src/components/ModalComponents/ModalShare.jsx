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
      top: '40%',
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


    return (
      <div>
        <div style={backDropStyle}></div>
        <div style={ModalStyle}>
          <h3>SHARE</h3>
          <p> Check out this awesome listing on Airbnb: {this.props.name} </p>
          <hr/>
          <div>
            <a href="https://www.facebook.com/" >
              <FontAwesome
                className="fab fa-facebook-square"
                name="facebook"
                size="2x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
              FACEBOOK
            </a>
          </div>
          <br/>
          <hr />
          <br/>
          <div>
            <a href="https://www.twitter.com/" >
              <FontAwesome
                className="fab fa-twitter"
                name="twitter"
                size="2x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
              TWITTER
            </a>
          </div>
          <br/>
          <hr />
          <br/>
          <div>
            <a href="https://www.gmail.com/" >
              <FontAwesome
                className="fab fa-google"
                name="google"
                size="2x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
             GMAIL
            </a>
          </div>
          <br/>
          <hr />
          <br/>
          <div>
            <a href="https://www.facebook.com/" >
              <FontAwesome
                className="fab fa-facebook-square"
                size="2x"
                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
              />
              MESSENGER
            </a>
          </div>
          <br/>
          <hr />
          <br/>
          <a href="https://www.facebook.com/" >
            <FontAwesome
              className="fas fa-copy"
              size="2x"
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
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

