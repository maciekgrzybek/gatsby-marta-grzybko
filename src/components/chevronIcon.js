import React from 'react';

const ChevronIcon = ({ handleClick, ...rest }, ) => {
  return (
    <div className="chevron-icon" onClick={handleClick}{...rest}>
      <span />
      <span />
    </div>
  );
};

export default ChevronIcon;
