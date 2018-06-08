import React from 'react';

import Save from './Save.jsx';

import ViewPhotos from './ViewPhotos.jsx';

import Share from './Share.jsx';

import ModalShare from './ModalShare.jsx';

import ModalSave from './ModalSave.jsx'

const SaveStyle = {
  position: 'absolute',
  right: '-85%',
  height: '40px',
  width: '100%',
  bottom: '90%',
};

const ExitStyle = {
  position: 'absolute',
  width: '100%',
  right: '-3%',
  bottom: '90%',
};

const ViewPhotosStyle = {
  position: 'absolute',
  width: '100%',
  right: '-3%',
  bottom: '30%',
};

const ShareStyle = {
  position: 'absolute',
  right: '-80%',
  height: '50px',
  width: '100%',
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
  handleModalClick(E) {
    this.setState({
      currentModal: E.target.value,
    }, function () {
      this.openModal();
    });
  }
  handleExitClick() {
    this.setState({
      currentModal: null,
    }, function (){
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
    } else if (this.state.isModalOpen === true && this.state.currentModal === 'Save'){
        modalChoice = <ModalSave />;
    }
    return (
      <div>
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
        <div style={ExitStyle}>
          <input type="button" onClick={this.handleExitClick} value="exit" />
        </div>
      </div>
    );
  }
}

export default ModalConductor;
