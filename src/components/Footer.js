import React, { Component } from "react";
import {DOMAIN_NAME, APP_NAME} from "../constants/Constants";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer" role="contentinfo">
          <div className="d-flex align-items-center flex-1 text-muted">
            <span className="hidden-md-down fw-700">
              2020 © {APP_NAME}&nbsp;
              <Link
                to={DOMAIN_NAME}
                className="text-primary fw-500"
                title={APP_NAME}
                target="_blank"
              >
                {DOMAIN_NAME}
              </Link>
            </span>
          </div>
          <div>
            <ul className="list-table m-0">
              <li>
                <Link to="#" className="text-secondary fw-700">
                  About
                </Link>
              </li>
              <li className="pl-3">
                <Link to="#" className="text-secondary fw-700">
                  Terms and Conditions
                </Link>
              </li>
              <li className="pl-3">
                <Link to="#" className="text-secondary fw-700">
                  Feedback
                </Link>
              </li>
              <li className="pl-3">
                <Link to="#" className="text-secondary fw-700">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}
