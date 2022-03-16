/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import { useEffect, useState } from 'react';

function ActiveCard() {

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

  useEffect(() => {
  }, [actives])
  console.log(actives)

  if (!actives) {
    return <h4>{'Carregando ...'}</h4>
  } else {
    return (
      <section className="container">
        <div>
          <div>
            <img src={actives[0].image} alt={actives[0].name} />
          </div>
          <div>
            <h3>{actives[0].name}</h3>
            <p>{actives[0].model}</p>
            <p>Empresa</p>
            <div className="dropdown">
              <a
                className="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Status
              </a>
              <ul>
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ActiveCard;