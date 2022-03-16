import Context from './Context';
import PropTypes from 'prop-types';
// import { useState } from 'react';
// import axios from 'axios';

function Provider({ children }) {



  
  return (
    <Context.Provider>
      { children}
    </Context.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;