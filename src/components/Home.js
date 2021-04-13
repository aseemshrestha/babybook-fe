import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  APP_NAME,
  HOME_PAGE_MAIN_TEXT,
  HOME_PAGE_SUMMARY,
} from "../constants/Constants";
import { connect } from "react-redux";
import logIn from "../store/actions/loginAction";

class Home extends Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props
      .dispatch(logIn(this.state))
      .then((response) => {
        window.location.href = "/dashboard";
      })
      .catch((error) => {
        //console.log(error)
        if (error.response.data.status === 401) {
          this.setState({
            message: `The email or password you entered did not match our records. Please double-check and try again.`,
          });
        }
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
                      className="page-logo-link press-scale-down d-flex align-items-center"
                      to="#"
                    >
                      <img
                        src={require("../img/logo.png")}
                        alt=""
                        aria-roledescription="logo"
                      />
                      <span className="page-logo-text mr-1">{APP_NAME}</span>
                    </Link>
                  </div>
                  <Link
                    href="page_register.html"
                    className="btn-link text-white ml-auto"
                    to="/register"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
              <div
                className="flex-1"
                style={{
                  background:
                    "url(img/svg/pattern-1.svg) no-repeat center bottom fixed",
                  backgroundize: "cover",
                }}
              >
                <div className="container py-4 py-lg-5 my-lg-5 px-4 px-sm-0">
                  <div className="row">
                    <div className="col col-md-6 col-lg-7 hidden-sm-down">
                      <h2 className="fs-xxl fw-500 mt-4 text-white">
                        {HOME_PAGE_MAIN_TEXT}
                        <small className="h3 fw-300 mt-3 mb-5 text-white opacity-60">
                          {HOME_PAGE_SUMMARY}
                        </small>
                      </h2>

                      <div className="d-sm-flex flex-column align-items-center justify-content-center d-md-block">
                        <div className="px-0 py-1 mt-5 text-white fs-nano opacity-50">
                          Find us on social media
                        </div>
                        <div className="d-flex flex-row opacity-70">
                          <Link className="mr-2 fs-xxl text-white" to="#">
                            <i className="fab fa-facebook-square"></i>
                          </Link>
                          <Link className="mr-2 fs-xxl text-white" to="#">
                            <i className="fab fa-twitter-square"></i>
                          </Link>
                          <Link className="mr-2 fs-xxl text-white" to="#">
                            <i className="fab fa-google-plus-square"></i>
                          </Link>
                          <Link className="mr-2 fs-xxl text-white" to="#">
                            <i className="fab fa-linkedin"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 ml-auto">
                      <h1 className="text-white fw-300 mb-3 d-sm-block d-md-none">
                        Secure login
                      </h1>
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
                            <label className="form-label" htmlFor="username">
                              Email
                            </label>
                            <input
                              type="text"
                              id="username"
                              name="username"
                              className="form-control form-control-lg"
                              placeholder="email"
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="form-control form-control-lg"
                              placeholder="password"
                              onChange={this.handleChange}
                            />
                          </div>

                          <div className="row no-gutters">
                            <div className="col-lg-6 pr-lg-1 my-2">
                              <button
                                type="submit"
                                className="btn btn-info btn-block btn-lg"
                              >
                                Sign in with <i className="fab fa-google"></i>
                              </button>
                            </div>
                            <div className="col-lg-6 pl-lg-1 my-2">
                              <button
                                id="js-login-btn"
                                type="submit"
                                className="btn btn-danger btn-block btn-lg"
                              >
                                Secure login
                              </button>
                            </div>
                          </div>
                        </form>
                        <div className="blankpage-footer text-center">
                          <Link to="/forgot-password">
                            <strong>Recover Password</strong>
                          </Link>{" "}
                          |{" "}
                          <Link to="/register">
                            <strong>Register Account</strong>
                          </Link>
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
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    logIn: (credentials) => dispatch(logIn(credentials)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
