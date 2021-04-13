import React, { Component } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { APP_NAME } from "../../constants/Constants";

class SideMenu extends Component {
  render() {
    return (
      <div>
        <aside className="page-sidebar">
          <div className="page-logo">
            <Link
              to="#"
              className="page-logo-link press-scale-down d-flex align-items-center position-relative"
              data-toggle="modal"
              data-target="#modal-shortcut"
            >
              <img
                src={require("../../img/logo.png")}
                alt=""
                aria-roledescription="logo"
              />
              <span className="page-logo-text mr-1">{APP_NAME}</span>
              <span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
            </Link>
          </div>
          <nav
            id="js-primary-nav"
            className="primary-nav js-list-filter"
            role="navigation"
          >
            <div className="nav-filter">
              <div className="position-relative">
                <input
                  type="text"
                  id="nav_filter_input"
                  placeholder="Filter menu"
                  className="form-control"
                  tabIndex="0"
                />
                <Link
                  to="#"
                  className="btn-primary btn-search-close js-waves-off"
                  data-action="toggle"
                  data-classname="list-filter-active"
                  data-target=".page-sidebar"
                >
                  <i className="fal fa-chevron-up"></i>
                </Link>
              </div>
            </div>
            <div className="info-card">
              <img
                src={require("../../img/avatars/1.png")}
                className="profile-image rounded-circle"
                alt="Dr. Codex Lantern"
              />
              <div className="info-card-text">
                <Link to="#" className="d-flex align-items-center text-white">
                  <span className="text-truncate text-truncate-sm d-inline-block">
                    {this.props.fullName}
                  </span>
                </Link>
                <span className="d-inline-block text-truncate text-truncate-sm">
                  Welcome !
                </span>
              </div>
              <img
                src={require("../../img/cover-2-lg.png")}
                className="cover"
                alt="cover"
              />
            </div>

            <ul id="js-nav-menu" className="nav-menu js-nav-built">
              <li>
                <Link
                  to="#"
                  title="Application Intel"
                  data-filter-tags="application intel"
                  className=" waves-effect waves-themed"
                  onClick={this.props.openHandler}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa fa-child"></i>
                  <span
                    className="nav-link-text"
                    data-i18n="nav.application_intel"
                  >
                    {" "}
                    Open Baby's Account
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  title="Miscellaneous"
                  data-filter-tags="miscellaneous"
                  className=" waves-effect waves-themed"
                >
                  <i className="fa fa-home"></i>
                  <span className="nav-link-text">
                    Home
                  </span>
                  
                </Link>
              </li>
              
              <li className="nav-title">My Pages</li>
              <li>
                <Link
                  to="/my-page"
                  title="Miscellaneous"
                  data-filter-tags="miscellaneous"
                  className=" waves-effect waves-themed"
                >
                  <i className="fa fa-clipboard"></i>
                  <span className="nav-link-text">
                    My Page
                  </span>
                  
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  title="Miscellaneous"
                  data-filter-tags="miscellaneous"
                  className=" waves-effect waves-themed"
                >
                  <i className="fa fa-camera"></i>
                  <span className="nav-link-text">
                    Photo Memories
                  </span>
                  
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  title="Miscellaneous"
                  data-filter-tags="miscellaneous"
                  className=" waves-effect waves-themed"
                >
                  <i className="fa fa-video"></i>
                  <span className="nav-link-text">
                    Video Memories
                  </span>
                  
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  title="Miscellaneous"
                  data-filter-tags="miscellaneous"
                  className=" waves-effect waves-themed"
                >
                  <i className="fa fa-sticky-note-o"></i>
                  <span className="nav-link-text">
                    My Diaries
                  </span>
                  
                </Link>
              </li>
            </ul>
            <div className="filter-message js-filter-message bg-success-600"></div>
          </nav>
          <div className="nav-footer shadow-top">
            <Link
              to="#"
              data-action="toggle"
              data-classname="nav-function-minify"
              className="hidden-md-down"
            >
              <i className="ni ni-chevron-right"></i>
              <i className="ni ni-chevron-right"></i>
            </Link>
            <ul className="list-table m-auto nav-footer-buttons">
              <li>
                <a
                  href="#(0);"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Chat logs"
                >
                  <i className="fal fa-comments"></i>
                </a>
              </li>
              <li>
                <a
                  href="#(0);"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Support Chat"
                >
                  <i className="fal fa-life-ring"></i>
                </a>
              </li>
              <li>
                <a
                  href="#(0);"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Make a call"
                >
                  <i className="fal fa-phone"></i>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    );
  }
}

export default SideMenu;
