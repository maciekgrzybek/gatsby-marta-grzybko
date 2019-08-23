import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import CloseIcon from './closeIcon';
import ChevronIcon from './chevronIcon';

const Modal = ({
  children,
  isOpen = false,
  updateOpen,
  currentImageIndex,
  setCurrentImageIndex,
  maxItems,
}) => {

  if(typeof window === 'undefined') {
    return null;
  }
  const modalRoot = document.getElementById('modal-root');
  const styles = {
    closeIcon: {
      position: 'absolute',
      top: 20,
      right: 20,
    },
    chevronIcon: {
      position: 'absolute',
      top: '50%',
      transform: 'translate3d(-50%,0,0)',
    },
    chevronIconLeft: {
      left: '3rem',
    },
    chevronIconRight: {
      right: '3rem',
      transform: 'translate3d(-50%,0,0) rotate(180deg)',
    },
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  function handleKeyPress(e) {
    if (isOpen) {
      if (e.keyCode === 27) {
        updateOpen(false);
      }
      if (e.keyCode === 37 && currentImageIndex !== 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
      if (e.keyCode === 39 && currentImageIndex !== maxItems) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }

  }

  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div className="modal">
      <CloseIcon onClick={() => updateOpen(false)} style={styles.closeIcon} />
      {currentImageIndex !== 0 && (
        <ChevronIcon
          style={{ ...styles.chevronIcon, ...styles.chevronIconLeft }}
          onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
        />
      )}

      {currentImageIndex !== maxItems && (
        <ChevronIcon
          style={{ ...styles.chevronIcon, ...styles.chevronIconRight }}
          onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
        />
      )}
      {children}
    </div>,
    modalRoot
  );
};

export default Modal;
