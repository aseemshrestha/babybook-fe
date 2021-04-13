import React, { Component } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import {
  APP_NAME,
  LS_STATE,
  LS_CHILD_INFO,
  POST_DATA,
} from "../../constants/Constants";

class Header extends Component {
  logOut() {
    localStorage.removeItem(LS_STATE);
    localStorage.removeItem(LS_CHILD_INFO);
    localStorage.removeItem(POST_DATA);
    window.location.href = "/";
  }

  render() {
    return (
      <div>
        <header className="page-header" role="banner">
          <div className="page-logo">
            <Link
              to="#"
              className="page-logo-link press-scale-down d-flex align-items-center position-relative"
              data-toggle="modal"
              data-target="#modal-shortcut"
            >
              <img
                src="../../img/logo.png"
                alt={APP_NAME}
                aria-roledescription="logo"
              />
              <span className="page-logo-text mr-1">{APP_NAME}</span>
              <span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
              <i className="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
            </Link>
          </div>
          <div className="hidden-md-down dropdown-icon-menu position-relative"></div>
          <div className="hidden-lg-up">
            <Link
              to="#"
              className="header-btn btn press-scale-down waves-effect waves-themed"
              data-action="toggle"
              data-class="mobile-nav-on"
            >
              <i className="fa fa-bars"></i>
            </Link>
          </div>
          <div className="search">
            <form
              className="app-forms hidden-xs-down"
              role="search"
              action="page_search.html"
              autoComplete="off"
            >
              <input
                type="text"
                id="search-field"
                placeholder="Search for anything"
                className="form-control"
                tabIndex="1"
              />
              <a
                href="#"
                className="btn-danger btn-search-close js-waves-off d-none"
                data-action="toggle"
                data-class="mobile-search-on"
              >
                <i className="fal fa-times"></i>
              </a>
            </form>
          </div>
          <div className="ml-auto d-flex">
            <div className="hidden-sm-up">
              <Link
                to="#"
                className="header-icon"
                data-action="toggle"
                data-class="mobile-search-on"
                data-focus="search-field"
                title="Search"
              >
                <i className="fal fa-search"></i>
              </Link>
            </div>
            <div className="hidden-md-down">
              <Link to="/dashboard" className="header-icon">
                <i className="fa fa-home"></i>
              </Link>
            </div>
            <div className="hidden-md-down">
              <Link to="/my-page" className="header-icon">
                <i className="fa fa-clipboard"></i>
              </Link>
            </div>
            <div>
              <Link to="#" className="header-icon" title="My Apps">
                <i className="fa fa-cube"></i>
              </Link>
            </div>

            <Link to="#" className="header-icon">
              <i className="fa fa-bell"></i>
            </Link>
          </div>
          <div>
            <Link
              to="#"
              data-toggle="dropdown"
              className="header-icon d-flex align-items-center justify-content-center ml-2"
            >
              <i className="fa fa-caret-down"></i>
            </Link>
            <div className="dropdown-menu dropdown-menu-animated dropdown-md">
              <div className="dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top">
                <div className="d-flex flex-row align-items-center mt-1 mb-1 color-white">
                  <div className="info-card-text">
                    <div className="fs-lg text-truncate text-truncate-lg">
                      {this.props.fullName}
                    </div>
                    <span className="text text-truncate-md opacity-100">
                      {this.props.email}
                    </span>
                  </div>
                </div>
              </div>
              <div className="dropdown-divider m-0"></div>

              <Link
                to="#"
                className="dropdown-item"
                data-toggle="modal"
                data-target=".js-modal-settings"
              >
                <span data-i18n="drpdwn.settings">Settings</span>
              </Link>

              <Link
                to="#"
                className="dropdown-item"
                data-toggle="modal"
                data-target=".js-modal-settings"
              >
                <span data-i18n="drpdwn.settings">Activities</span>
              </Link>

              <Link to="#" className="dropdown-item fw-500 pt-3 pb-3">
                <span data-i18n="drpdwn.page-logout" onClick={this.logOut}>
                  Logout
                </span>
                <span className="float-right fw-n"> {this.props.fullName}</span>
              </Link>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
