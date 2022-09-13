import React from "react";

const FormLogin = () => {
  return (
    <>
      <header className="header d-flex justify-content-center">
        <div className="container row h-100 align-items-center col-md-5 d-md-block container-1">
          <form className="header-form">
            <div className="head">Krypt.io - secure you password.</div>
            <div className="body">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email*"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password*"
                />
              </div>
            </div>
            <div className="footer1" href="/">
              <button className="btn btn-primary btn-block">Log in</button>
            </div>
          </form>
          <div className="sign-up">
            <a href="/Openaccount" className="text-color-1">
              Sign-up
            </a>
            <a href="/" className="text-color-1">
              Forgot Password?
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default FormLogin;
