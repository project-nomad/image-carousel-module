import React from 'react';

import Save from './Save.jsx';

import ViewPhotos from './ViewPhotos.jsx';

import Share from './Share.jsx';

import ModalShare from './ModalComponents/ModalShare.jsx';

import ModalSave from './ModalComponents/ModalSave.jsx';

import ModalViewPhotos from './ModalComponents/ModalViewPhotos.jsx';


const SaveStyle = {
  position: 'absolute',
  right: '-90%',
  height: '40px',
  width: '100%',
  bottom: '90%',
};

const ExitStyle = {
  right: '-97%',
  color: 'white',
  position: 'absolute',
  width: '100%',
  bottom: '95%',
};

const ViewPhotosStyle = {
  position: 'absolute',
  width: '100%',
  right: '-3%',
  bottom: '35%',
};

const ShareStyle = {
  position: 'absolute',
  right: '-90%',
  height: '40px',
  width: '100%',
  top: '10%',
};


class ModalConductor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModal: 'null',
      isModalOpen: false,
    };
    this.handleModalClick = this.handleModalClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleExitClick = this.handleExitClick.bind(this);
  }
  handleModalClick(e) {
    this.setState({
      currentModal: e.target.value,
    }, function () {
      this.openModal();
    });
  }
  handleExitClick() {
    this.setState({
      currentModal: null,
    }, function () {
      this.closeModal();
    });
  }
  openModal() {
    this.setState({
      isModalOpen: true,
    });
  }
  closeModal() {
    this.setState({
      isModalOpen: false,
    });
  }

  render() {
    let modalChoice = null;
    if (this.state.isModalOpen === true && this.state.currentModal === 'Share') {
      modalChoice = <ModalShare name={this.props.name} />;
    } else if (this.state.isModalOpen === true && this.state.currentModal === 'Save') {
      modalChoice = <ModalSave />;
    } else if (this.state.isModalOpen === true && this.state.currentModal === 'ViewPhotos') {
      modalChoice = <ModalViewPhotos currentPictures={this.props.currentPictures} />;
    } else if (this.props.backgroundClicked === true) {
      modalChoice = <ModalViewPhotos currentPictures={this.props.currentPictures} />;
    }
    return (
      <div backgroundImage={this.props.backgroundImage} width="100%" position="absolute">
        <div style={ViewPhotosStyle}>
          <ViewPhotos click={this.handleModalClick} />
        </div>
        <div style={ShareStyle} >
          <Share click={this.handleModalClick} />
        </div>
        <div style={SaveStyle}>
          <Save click={this.handleModalClick} />
        </div>
        {modalChoice}
        <div style={ExitStyle} onClick={this.handleExitClick} value="exit">
          X
        </div>
      </div>
    );
  }
}

export default ModalConductor;
