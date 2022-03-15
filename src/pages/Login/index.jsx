import './styles.css';

function Login() {
  return (
    <div className="container">
      <div className="content-login row">
        <div className="content-left col-6">
          <img className="img-fluid" src="https://app.tractian.com/static/media/tractian-login.f480cb7e.svg" alt="traction-login" />
        </div>
        <div className="content-right col-6 align-items-stretch">
          <h1>LOGIN</h1>
          <p>Insira seu e-mail</p>
          <div class="input-group has-validation content-input">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text"
            class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              <div class="invalid-feedback">
                Please choose a username.
              </div>
          </div>
          <div>
            <button
              className="content-btn btn btn-primary col-12"
              type='submit'
            >Acessar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
