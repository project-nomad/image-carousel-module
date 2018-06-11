import React from 'react';

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
      top: '35%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '400px',
      height: '350px',
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
          <h1>SHARE</h1>
          <p> Check out this awesome listing on Airbnb: {this.props.name} </p>
          <hr/>
          <a href="https://www.facebook.com/" >&#10765;    FACEBOOK</a>
          <hr/>
          <a href="https://www.twitter.com/" >&#128038;  TWITTER</a>
          <hr/>
          <a href="https://www.gmail.com/" >&#120126;  GMAIL</a>
          <hr/>
          <a href="https://www.facebook.com/" >&#9889;  MESSENGER</a>
          <hr/>
          <a href="https://www.facebook.com/" >&#169;  COPY LINK</a>
          <hr/>
          <a href="https://www.facebook.com/" >&#8826;&#8725;&#8827; EMBED</a>
          <hr/>
        </div>

      </div>
    );
  }
}

export default ModalShare;

