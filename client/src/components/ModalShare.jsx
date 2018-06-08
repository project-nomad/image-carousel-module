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
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: '#fff',
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
        <div style={ModalStyle}>
          Share details go here!
        </div>
        <div>
          <input type="button" onClick={this.props.close} />
        </div>
        <div style={backDropStyle}>

        </div>

      </div>
    );
  }
}

export default ModalShare

