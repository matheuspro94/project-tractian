import './styles.css';
import React, { useState } from 'react';
import axios from 'axios';
function Login() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(true)

  async function attemptLogin() {
    try {
      const { data } = await axios.post('https://my-json-server.typicode.com/tractian/fake-api/users', {
        email: email,
      })
      localStorage.setItem('user', JSON.stringify(data))
      setLoading(false)
    } catch (error) {
      console(error)
    }
  }

  return (
    <div className="container">
      <div className="content-login row">
        <div className="content-left col-6">
          <img className="img-fluid" src="https://app.tractian.com/static/media/tractian-login.f480cb7e.svg" alt="traction-login" />
        </div>
        <form className="content-right col-6 align-items-stretch">
          <h1>LOGIN</h1>
          <p>Insira seu e-mail</p>
          <div class="input-group has-validation content-input">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input 
              type="email"
              placeholder='E-mail'
              onChange={({ target }) => setEmail(target.value)}
              class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
              required
            />
              <div class="invalid-feedback">
                Please choose a username.
              </div>
          </div>
          <div>
            <button
              className="content-btn btn btn-primary col-12"
              type='button'
              onClick={ attemptLogin }
            >Acessar</button>
          </div>
          {loading ? <p>Loading</p> : null}
        </form>
      </div>
    </div>
  )
}

export default Login;
