import React from 'react';

const ModalSave = (props) => {

  if(props.isOpen === false){
    return null
  }

  const ModalStyle = {
    borderStyle: 'solid',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '350px',
    background: 'rgb(255,255,255)',
  };
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
      <h2> Save To List </h2>
      <br/>
        <input type="input" placeholder="Name your list" borderStyle="solid" /> <br/>
      <input type="button" value="CANCEL" />
      <input type="button" value="CREATE" />
      </div>
    </div>
  )

}




export default ModalSave;