import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import validateEmail from '../../validate/validatelogin';
import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (validateEmail(email)) {
      setButtonDisable(false);
    }
  }, [email]);

  async function attemptLogin() {
    try {
      const { data } = await axios.post('https://my-json-server.typicode.com/tractian/fake-api/users', {
        email,
      });
      localStorage.setItem('user', JSON.stringify(data));
      setLoading(true);
      navigate('/active');
    } catch (error) {
      console(error);
    }
  }

  return (
    <div className="container content-login">
      <div className="content-login row">
        <div className="content-left col-6">
          <img className="img-fluid" src="https://app.tractian.com/static/media/tractian-login.f480cb7e.svg" alt="traction-login" />
        </div>
        <form className="content-right-login col-6 align-items-stretch">
          <h1>LOGIN</h1>
          <div className="input-group has-validation content-input">
            <input
              type="email"
              placeholder="Insira seu e-mail"
              onChange={({ target }) => setEmail(target.value)}
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">
              Please choose a username.
            </div>
          </div>
          <div>
            <button
              className="content-btn btn btn-primary col-12"
              type="button"
              onClick={attemptLogin}
              disabled={buttonDisable}
            >
              Acessar

            </button>
          </div>
          {loading && <p>Loading....</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
