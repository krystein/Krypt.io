import React from "react";
import "./FormSignUp.css";
//import components
import useForm from "./useForm";
import Validate from "./Validateinfor";

function FormSignUp({ submitForm }) {
  const { handleChange, value, handleSubmit, error } = useForm(
    submitForm,
    Validate
  );

  return (
    <div className="col-lg-8 col-xlg-9 col-md-12">
      <div className="card">
        <div className="card-body">
          <form
            className="form-horizontal form-material"
            onSubmit={handleSubmit}
          >
            <div className="form-group mb-4">
              <label htmlFor="username" className="col-md-12 p-0">
                Name
              </label>
              <div className="col-md-12 border-bottom p-0">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your name"
                  className="form-control p-0 border-0"
                  value={value.username}
                  onChange={handleChange}
                />
                {error.username && <p className="p">{error.username}</p>}
              </div>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="email" className="col-md-12 p-0">
                Email
              </label>
              <div className="col-md-12 border-bottom p-0">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="@admin.com"
                  className="form-control p-0 border-0"
                  value={value.email}
                  onChange={handleChange}
                />
                {error.email && <p className="p">{error.email}</p>}
              </div>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="DOB" className="col-md-12 p-0">
                Date of Birth
              </label>
              <input
                id="DOB"
                name="DOB"
                type="date"
                className="form-control"
                placeholder="Date Of Birth*"
                value={value.DOB}
                onChange={handleChange}
              />
              {error.DOB && <p className="p">{error.DOB}</p>}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="Address" className="col-md-12 p-0">
                Current Address
              </label>
              <div className="col-md-12 border-bottom p-0">
                <input
                  id="Address"
                  name="Address"
                  type="text"
                  placeholder="Address"
                  className="form-control p-0 border-0"
                  value={value.Address}
                  onChange={handleChange}
                />
                {error.Address && <p className="p">{error.Address}</p>}
              </div>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="phone" className="col-md-12 p-0">
                Phone Number
              </label>
              <div className="col-md-12 border-bottom p-0">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  pattern="[0-9]{11}"
                  placeholder="Phone"
                  className="form-control p-0 border-0"
                  value={value.phone}
                  onChange={handleChange}
                />
                {error.phone && <p className="p">{error.phone}</p>}
              </div>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password" className="col-md-12 p-0">
                Password
              </label>
              <div className="col-md-12 border-bottom p-0">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  className="form-control p-0 border-0"
                  value={value.password}
                  onChange={handleChange}
                />
                {error.password && <p className="p">{error.password}</p>}
              </div>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password2" className="col-md-12 p-0">
                Confirm Password
              </label>
              <div className="col-md-12 border-bottom p-0">
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  placeholder="Enter your password"
                  className="form-control p-0 border-0"
                  value={value.password2}
                  onChange={handleChange}
                />
                {error.password2 && <p className="p">{error.password2}</p>}
              </div>
            </div>
            <div className="form-group mb-4 mb-a">
              <div className="col-sm-12">
                <button className="btn btn-success" type="submit">
                  Sign up
                </button>
                <span className="login">
                  Already have an account? Login<a href="/Login">here</a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormSignUp;
