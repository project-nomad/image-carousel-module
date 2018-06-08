import React from 'react';

import Save from './Save.jsx';

import ViewPhotos from './ViewPhotos.jsx';

import Share from './Share.jsx';

import ModalShare from './ModalShare.jsx';

const SaveStyle = {
  position: 'absolute',
  right: '-85%',
  height: '40px',
  width: '100%',
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
      this.openModal()
    });
  }
  handleExitClick() {
    this.setState({
      currentModal: null,
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
    let modalChoice = <div></div>;
    if (this.state.isModalOpen === true && this.state.currentModal === 'Share') {
      modalChoice = <ModalShare close={this.handleExitClick} />;
    }
    return (
      <div>
        {modalChoice}
        <div style={SaveStyle}>
          <Save click={this.handleModalClick} />
        </div>
        <div style={ViewPhotosStyle}>
          <ViewPhotos click={this.handleModalClick} />
        </div>
        <div style={ShareStyle} >
          <Share click={this.handleModalClick} />
        </div>
      </div>
    );
  }
}

export default ModalConductor;
