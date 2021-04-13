import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { APP_NAME } from "../constants/Constants";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

class ForgotPassword extends Component {
  state = {
    email: "",
    isSuccess: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    //  console.log(this.state);
    return axios
      .post(`${BASE_URL}/api/v1/public/password-reset`, this.state, {})
      .then(response => {
        this.setState({
          message: response.data,
          isSuccess: true
        });
      })
      .catch(error => {
        this.setState({
          message: `The email or password you entered did not match our records. Please double-check and try again.`
        });
      });
  };

  render() {
    if (this.state.isSuccess) {
      return (
        <Redirect
          to={{
            pathname: "/password-reset",
            state: { username: this.state.email }
          }}
        />
      );
    }
    return (
      <div>
        <div className="page-wrapper">
          <div className="page-inner bg-brand-gradient">
            <div className="page-content-wrapper bg-transparent m-0">
              <div className="height-10 w-100 shadow-lg px-4 bg-brand-gradient">
                <div className="d-flex align-items-center container p-0">
                  <div className="page-logo width-mobile-auto m-0 align-items-center justify-content-center p-0 bg-transparent bg-img-none shadow-0 height-9">
                    <Link
                      to="/"
                      className="page-logo-link press-scale-down d-flex align-items-center"
                    >
                      <img
                        src={require("../img/logo.png")}
                        alt="SmartAdmin WebApp"
                        aria-roledescription="logo"
                      />
                      <span className="page-logo-text mr-1">{APP_NAME}</span>
                    </Link>
                  </div>
                  <span className="text-white opacity-50 ml-auto mr-2 hidden-sm-down">
                    Already a member?
                  </span>
                  <Link to="/" className="btn-link text-white ml-auto ml-sm-0">
                    Secure Login
                  </Link>
                </div>
                <div
                  className="flex-1"
                  style={{
                    background:
                      "url(img/svg/pattern-1.svg) no-repeat center bottom fixed",
                    backgroundize: "cover"
                  }}
                >
                  <div className="container py-4 py-lg-5 my-lg-5 px-4 px-sm-0">
                    <div className="row">
                      <div className="col-xl-12">
                        <h2 className="fs-xxl fw-500 mt-4 text-white text-center">
                          Find your {APP_NAME} account
                          <small className="h3 fw-300 mt-3 mb-5 text-white opacity-60 hidden-sm-down">
                            Please enter your email to recover your account.
                          </small>
                        </h2>
                      </div>

                      <div className="col-xl-6 ml-auto mr-auto">
                        <div className="card p-4 rounded-plus bg-faded">
                          {this.state.message && (
                            <div
                              className="alert alert-primary text-dark"
                              role="alert"
                            >
                              {this.state.message}
                            </div>
                          )}
                          <form id="js-login" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                              <label
                                className="form-label"
                                htmlFor="lostaccount"
                              >
                                &nbsp;Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Recovery email"
                                id="email"
                                name="email"
                                required
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="row no-gutters">
                              <div className="col-md-4 ml-auto text-right">
                                <button
                                  id="js-login-btn"
                                  type="submit"
                                  className="btn btn-danger"
                                >
                                  Recover
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
