/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import './styles.css';

function ActiveCard() {

  const { actives } = useContext(Context)

  if (!actives) {
    return <h4>{'Carregando ...'}</h4>
  } else {
    return (
      <div className="container container-active">
        <div className="row">
          {actives.map((active, index) => (
            <Link className="col-sm-6 col-lg-4 col-xl-3 content-active" key={index} to={`/status-active/${active.id}`}>
              <div>
                <img className="img-active card-img-top" src={active.image} alt={active.name} />
                <h4 className="p-active">{active.name}</h4>
                <p className="p-active">{active.sensors[0]}</p>
                <p className="p-active">{`MODELO: ${active.model}`}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

export default ActiveCard;