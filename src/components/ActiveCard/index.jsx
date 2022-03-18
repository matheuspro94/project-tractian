import React, { useContext, memo } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import './styles.css';

function ActiveCard() {
  const { actives } = useContext(Context);

  if (!actives) {
    return <h4>Carregando ...</h4>;
  }
  return (
    <div className="container-active">
      <div className="row content-row">
        {actives.map((active) => (
          <div key={active.id} className="col-sm-6 col-lg-4 col-xl-3 content-active">
            <div className="content-card">
              <Link to={`/status-active/${active.id}`}>
                <img className="img-active card-img-top" src={active.image} alt={active.name} />
              </Link>
              <h4 className="p-active">{active.name}</h4>
              <p className="p-active">{active.sensors[0]}</p>
              <p className="p-active">{`MODELO: ${active.model}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ActiveCard);
