import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Context from './Context';

function Provider({ children }) {
  const [actives, setActives] = useState([]);
  const [activeById, setActiveById] = useState();
  const [update, setUpdate] = useState();

  async function getActives() {
    try {
      const { data } = await axios.get('https://my-json-server.typicode.com/tractian/fake-api/assets');
      setActives(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getActiveById(id) {
    try {
      const { data } = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/assets/${id}`);
      setActiveById(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateActive(id, params) {
    try {
      const { data } = await axios.put(`https://my-json-server.typicode.com/tractian/fake-api/assets/${id}`, params);
      setUpdate(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getActives();
  }, []);

  const contextValue = {
    actives,
    activeById,
    getActiveById,
    updateActive,
    update,
  };

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
