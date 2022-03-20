/* eslint-disable react/no-array-index-key */
import React, { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Context from '../../context/Context';

import './styles.css';
// import Context from '../../context/Context';

function Form() {
  const { id } = useParams();
  const statusForm = ['inAlert', 'inOperation', 'inDowntime'];
  const { updateActive } = useContext(Context);
  const [updateSucess, setUpdateSucess] = useState(false);
  const [health, setHealth] = useState('');
  const [temp, setTemp] = useState('');
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    updateActive(id, {
      healthscore: Number(health),
      specifications: {
        maxTemp: Number(temp),
      },
      status,
    });
    setUpdateSucess(true);
  }

  function handleInputHealth({ target }) {
    setHealth(target.value);
    setHealth('');
  }

  function handleInputTemp({ target }) {
    setTemp(target.value);
    setTemp('');
  }

  function handleInputStatus({ target }) {
    setStatus(target.value);
  }

  return (
    <div className="container-form">
      <h4>Atualize os dados do ativo</h4>
      <form className="content-form" onSubmit={handleSubmit}>
        <label className="form-label content-label" htmlFor="name">
          Saúde em %:
          <input onChange={handleInputHealth} className="form-control content-input-form" type="text" id="name" />
        </label>
        <label className="form-label content-label" htmlFor="temperatura">
          Temperatura maxima:
          <input onChange={handleInputTemp} className="form-control" type="text" id="temperatura" />
        </label>
        <label className="form-label content-label" htmlFor="date">
          Status:
          <select onChange={handleInputStatus} className="form-select">
            {statusForm.map((item, index) => (
              <option key={index} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <div className="content-btns-form">
          <button className="btn btn-success" type="submit">Enviar</button>
          <Link to={`/status-active/${id}`}>
            <button className="btn btn-secondary" type="button">Voltar</button>
          </Link>
        </div>
        <div className="content-span">
          {updateSucess && <span>Atualizado com sucesso!</span>}
        </div>
      </form>
    </div>
  );
}

export default Form;
