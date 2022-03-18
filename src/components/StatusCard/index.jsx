import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Moment from 'moment';
import Context from '../../context/Context';
import './styles.css';

function StatusCard() {
  const { id } = useParams();
  const [activeById, setActiveById] = useState();
  const { actives } = useContext(Context);

  async function getActiveById() {
    try {
      const { data } = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/assets/${id}`);
      setActiveById(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getActiveById();
  }, []);

  function transformInHours(time) {
    const hours = Math.floor(time / 60);
    return `${hours}h`;
  }

  if (!activeById) {
    return <h4>Carregando ...</h4>;
  }

  return (
    <div className="content-status">
      <div className="content-status-img">
        <h3>{activeById.name}</h3>
        <img src={activeById.image} alt={activeById.name} />
      </div>
      <div>
        <h4>Ativo</h4>
        <div className="content-flex">
          <h5>Saúde do ativo: </h5>
          <p>{`${activeById.healthscore}%`}</p>
        </div>
        <div className="content-flex">
          <h5>Modelo: </h5>
          <p>{activeById.model}</p>
        </div>
        <div>
          <h4>Especificaçôes</h4>
          <div className="content-flex">
            <h5>Temperatura máxima: </h5>
            <p>{activeById.specifications.maxTemp}</p>
          </div>
          <div className="content-flex">
            <h5>Potência: </h5>
            <p>{activeById.specifications.power}</p>
          </div>
          <div className="content-flex">
            <h5>RPM: </h5>
            <p>{activeById.specifications.rpm}</p>
          </div>
        </div>
        <div>
          <h4>Metricas</h4>
          <div className="content-flex">
            <h5>Total de Coletas: </h5>
            <p>{activeById.metrics.totalCollectsUptime}</p>
          </div>
          <div className="content-flex">
            <h5> Total de Horas de Coletas: </h5>
            <p>{transformInHours(activeById.metrics.totalUptime)}</p>
          </div>
          <div className="content-flex">
            <h5>Data da Ultima Coleta: </h5>
            <p>{Moment(activeById.metrics.lastUptimeAt).format('YYYY-MM-DD')}</p>
          </div>
        </div>
        <div>
          {activeById.sensors.map((item) => (
            <>
              <h4>Sensores: </h4>
              <ul className="content-flex">
                <li key={actives.id} value={item}>{item}</li>
              </ul>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatusCard;
