import React from "react";

const FormLogin = () => {
  return (
    <>
      <header class="header d-flex justify-content-center">
        <div class="container row h-100 align-items-center col-md-5 d-md-block container-1">
          <form class="header-form">
            <div class="head">Krypt.io - secure you password.</div>
            <div class="body">
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email*" />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password*"
                />
              </div>
            </div>
            <div class="footer1">
              <button class="btn btn-primary btn-block">Log in</button>
            </div>
          </form>
          <div class="sign-up">
            <a href="/Openaccount" class="text-color-1">
              Sign-up
            </a>
            <a href="/" class="text-color-1">
              Forgot Password?
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default FormLogin;
