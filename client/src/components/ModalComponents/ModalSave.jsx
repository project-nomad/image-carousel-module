import React from 'react';

  const ModalStyle = {
    borderStyle: 'solid',
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '200px',
    height: '350px',
    background: 'rgb(255,255,255)',

  };
  const backDropStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0px',
    left: '0px',
    background: 'grey',
  };

  const picture = {
    width: '100%',
    height: 'auto',
  };


class ModalSave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentEmails: ['Example.com'],
      currentEmail: undefined,
    };
    this.handleCurrentEmail = this.handleCurrentEmail.bind(this);
    this.handleAddToCurrentEmails = this.handleAddToCurrentEmails.bind(this);
  }

  handleCurrentEmail(e) {
    this.setState({
      currentEmail: e.target.value,
    }, console.log(this.state.currentEmail));
  }

  handleAddToCurrentEmails(e) {
    e.preventDefault();
    this.setState({
      currentEmails: [...this.state.currentEmails, this.state.currentEmail],
    }, console.log(this.state.currentEmails));
  }

render(){
  return (
    <div>
      <div style={backDropStyle}></div>
      <div style={ModalStyle}>
      <div>
        <h2> Save To List </h2>
      </div>
      <div>
        <input type="input" placeholder="add your email" borderstyle="solid" onKeyPress={this.handleCurrentEmail}/> <br/>
        <input type="button" value="CANCEL" />
        <input type="button" value="CREATE" onClick={this.handleAddToCurrentEmails} />
      </div>
      <div>
        <img style={picture} src={this.props.currentPictures[10]}/>
      </div>
      <div>
        {
          this.state.currentEmails.map((email)=>{
            return (
              <div>
                {email}
              </div>
              )
          })
        }
      </div>

      </div>
    </div>
    )
  }
}




export default ModalSave;