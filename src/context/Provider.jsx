import PropTypes from 'prop-types';
import Context from './Context';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Provider({ children }) {

  const [actives, setActives] = useState('');

  async function getActives() {
    try {
      const { data } = await axios.get('https://my-json-server.typicode.com/tractian/fake-api/assets')
      setActives(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getActives()
  }, [])


  const contextValue = {
    actives,
  }

  return (
    <Context.Provider value={ contextValue }>
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