import React, {useEffect} from 'react';
import {createPortal} from 'react-dom';


import CloseIcon from './closeIcon';

const modalRoot = document.getElementById('modal-root')

const Modal = ({children, isOpen = false, updateOpen}) => {
  const styles = {
    closeIcon: {
      position: 'absolute',
      top: 20,
      right: 20,
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  })
  function handleKeyPress(e) {
    if(isOpen && e.keyCode === 27) {
      updateOpen(false);
    }
  }

  if(!isOpen) {
    return null;
  }
  return (
    createPortal(
      <div className="modal">
        <CloseIcon onClick={() => updateOpen(false)} style={styles.closeIcon}/>
        {children}
      </div>,
      modalRoot)
  )
}

export default Modal;