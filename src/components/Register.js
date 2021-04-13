import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { APP_NAME } from "../constants/Constants";
import { connect } from "react-redux";
import registerUser from "../store/actions/registerAction";
import 'font-awesome/css/font-awesome.min.css';

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    signedUp: false
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props
      .dispatch(registerUser(this.state))
      .then(() => {
        this.setState({
          message: `Account has been successfully created. You may now login. 
          Redirecting to you home page...`
        });
      })
      .then(() => setTimeout(() => this.setState({ signedUp: true }), 2000))
      .catch(error => {
        this.setState({
          message: "Oops! " + error.response.data.message[0]
        });
      });
  };

  render() {
    if (this.state.signedUp) {
      return <Redirect to="/" />;
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
              </div>
              <div className="flex-1">
                <div className="container py-4 py-lg-5 my-lg-5 px-4 px-sm-0">
                  <div className="row">
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
                          <div className="form-group row">
                            <label
                              className="col-xl-12 form-label"
                              htmlFor="firstName"
                            >
                              Your first and last name
                            </label>
                            <div className="col-6 pr-1">
                              <input
                                type="text"
                                id="firstName"
                                className="form-control"
                                placeholder="First Name"
                                required
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className="col-6 pl-1">
                              <input
                                type="text"
                                id="lastName"
                                className="form-control"
                                placeholder="Last Name"
                                onChange={this.handleChange}
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="emailverify">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              placeholder="Email for verification"
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="password">
                              Pick a password: <br />
                            </label>
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              placeholder="minimm 8 characters"
                              onChange={this.handleChange}
                              minLength="8"
                              required
                            />
                            <div className="help-block">
                              Your password must be 8 characters long.
                            </div>
                          </div>
                          <div className="form-group demo">
                            <label className="form-label" htmlFor="password">
                              Gender: <br />
                            </label>
                            <div className="frame-wrap">
                              <fieldset id="" required>
                                <input
                                  type="radio"
                                  value="Male"
                                  name="gender"
                                  id="gender"
                                  required
                                  onChange={this.handleChange}
                                />
                                &nbsp;
                                <small>Male</small>
                                &nbsp; &nbsp;
                                <input
                                  type="radio"
                                  value="Female"
                                  name="gender"
                                  id="gender"
                                  onChange={this.handleChange}
                                />
                                &nbsp;
                                <small>Female</small>
                              </fieldset>
                            </div>
                          </div>
                          <small className="small">
                            By clicking Register, you agree to our{" "}
                            <Link to="#">terms and conditions.</Link>
                          </small>
                          <div className="row no-gutters">
                            <div className="col-md-4 ml-auto text-right">
                              <button
                                id="js-login-btn"
                                type="submit"
                                className="btn btn-block btn-danger btn-lg mt-3"
                              >
                                Register
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
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    registerUser: user => dispatch(registerUser(user))
  };
};

export default connect(null, mapDispatchToProps)(Register);
