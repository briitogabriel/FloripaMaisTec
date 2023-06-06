import React from 'react';
import PropTypes from 'prop-types';

function Button({ prop, visible }) {

  if (visible === false) return null;

  return ( 
    <>
      <button className="botao">{prop}</button>
    </>
  );
    
}

Button.propTypes = {
  prop: PropTypes.string.isRequired,
  visible: PropTypes.bool,
}

export default Button;