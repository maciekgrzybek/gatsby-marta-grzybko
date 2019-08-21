import React from 'react';

const CloseIcon = ({ handleClick, ...rest }, ) => {
  return (
    <div className="close-icon" onClick={handleClick}{...rest}>
      <span />
      <span />
    </div>
  );
};

export default CloseIcon;
