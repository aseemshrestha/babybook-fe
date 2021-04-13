import React, { Component } from "react";
import { connect } from "react-redux";
import logIn from "../store/actions/loginAction";
import { Link } from "react-router-dom";
import { APP_NAME } from "../constants/Constants";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

class PasswordReset extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  componentDidMount() {
    this.setState({
      username: this.props.location.state.username
    });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
    return axios
      .post(`${BASE_URL}/api/v1/public/password-reset-submit`, this.state, {})
      .then(response => {
       // console.log("response ===>" + response.status)
        if (response.status === 200) {
         // console.log(response.data)
         this.props
         .dispatch(logIn(this.state))
         .then(response => {
           //console.log("login successful");
           window.location.href="/dashboard";
         })
         .catch(error => {
           //console.log(error)
           if (error.response.data.status === 401) {
             this.setState({
               message: `The email or password you entered did not match our records. Please double-check and try again.`
             });
           }
         }); 
         // this.setState({
           // message: response.data
         // });
        }
      })
      .catch(error => {
        this.setState({
          message: error.response.data.message
        });
      });
  };

  render() {
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
                          We sent you a verification code.
                          <small className="h3 fw-300 mt-3 mb-5 text-white opacity-60 hidden-sm-down">
                            Please enter verification code with new password to
                            get access to your account again.
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
                                &nbsp;Code{" "}
                                <span className="help-block">
                                  6 digit code that you received in email.
                                </span>
                              </label>
                              <input
                                className="form-control"
                                placeholder="Code"
                                name="resetCode"
                                type="number"
                                required
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <label
                                className="form-label"
                                htmlFor="lostaccount"
                              >
                                &nbsp;Password{" "}
                                <span className="help-block">
                                  {" "}
                                  minumum 8 characters long.
                                </span>
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="password"
                                name="password"
                                minLength="8"
                                required
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="hidden"
                                className="form-control"
                                placeholder="text"
                                name="username"
                                required
                                value={this.state.username}
                              />
                            </div>
                            <div className="form-group">
                              <label
                                className="form-label"
                                htmlFor="lostaccount"
                              >
                                &nbsp;Confirm Password{" "}
                                <span className="help-block">
                                  minimum 8 characters long.
                                </span>
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                placeholder="confirm password"
                                name="confirmPassword"
                                required
                                minLength="8"
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
                                  Reset Password
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

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    logIn: credentials => dispatch(logIn(credentials))
  };
};

export default connect(null, mapDispatchToProps)(PasswordReset);
