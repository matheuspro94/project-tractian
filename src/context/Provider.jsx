import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Context from './Context';

function Provider({ children }) {
  const [actives, setActives] = useState([]);

  async function getActives() {
    try {
      const { data } = await axios.get('https://my-json-server.typicode.com/tractian/fake-api/assets');
      setActives(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getActives();
  }, []);

  const contextValue = { actives };
  const memoizedValue = useMemo(() => contextValue);

  return (
    <Context.Provider value={memoizedValue}>
      { children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
