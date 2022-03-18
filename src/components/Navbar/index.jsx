import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoTractian } from '../../assets/img/Logo-Tractian.svg';
import './styles.css';

function Navbar() {
  const [user, setUser] = useState('');

  useEffect(() => {
    function getUser() {
      const data = JSON.parse(localStorage.getItem('user'));
      setUser(data.email);
    }
    getUser();
  }, []);

  return (
    <header>
      <nav className="container content-navbar">
        <div className="row align-items-center">
          <div className="col-3 content-img">
            <LogoTractian />
          </div>
          <p className="col-6 content-p">
            User:
            {' '}
            {user}
          </p>
          <Link
            to="/login"
            className="col-3 btn btn-warning"
            onClick={() => localStorage.clear()}
          >
            Sair
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
