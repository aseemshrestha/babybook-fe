import React, { Component } from "react";
import Moment from "react-moment";

class RightSubProfile extends Component {
  render() {
    let babyDetails;
    if (this.props.babyInfo.length === 0) {
      babyDetails = (
        <div className="card mb-2">
          <div className="card-body">
            <a href="#" className="d-flex flex-row align-items-center">
              <div className="icon-stack display-4 flex-shrink-0">
                <i className="fa fa-user-circle icon-stack-1x opacity-0 color-primary-500"></i>
              </div>
              <div className="ml-3">
                <strong>You haven't opened baby account yet.</strong>
                <br />
              </div>
            </a>
          </div>
        </div>
      );
    } else {
      babyDetails = this.props.babyInfo.map((c, i) => (
        <div className="card mb-2" key={i}>
          <div className="card-body">
            <a href="#" className="d-flex flex-row align-items-center">
              <div className="icon-stack display-4 flex-shrink-0">
                <i className="fa fa-heart icon-stack-1x opacity-0 color-primary-500"></i>
              </div>
              <div className="ml-3">
                <strong>{c.firstName}</strong>
                <br />
                is now{" "}
                <Moment diff={c.dob} unit="days">
                  {new Date()}
                </Moment>{" "}
                days old.
              </div>
            </a>
          </div>
        </div>
      ));
    }

    return (
      <div>
        {babyDetails}
        <div className="card mb-g">
          <div className="row row-grid no-gutters">
            <div className="col-12">
              <div className="p-3">
                <h2 className="mb-0 fs-xl">Dr. Codex Lantern's Rating</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="p-3 d-flex text-primary align-items-center fs-xl">
                <i className="fas fa-star mr-1"></i>
                <i className="fas fa-star mr-1"></i>
                <i className="fas fa-star mr-1"></i>
                <i className="fas fa-star mr-1"></i>
                <i className="fal fa-star mr-1"></i>
                <span className="ml-auto">4/5 Stars</span>
              </div>
            </div>
            <div className="col-12">
              <div className="p-3">
                <div className="fw-500 fs-xs">Staff</div>
                <div className="progress progress-xs mt-2">
                  <div
                    className="progress-bar bg-primary-300 bg-primary-gradient"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="p-3">
                <div className="fw-500 fs-xs">Punctuality</div>
                <div className="progress progress-xs mt-2">
                  <div
                    className="progress-bar bg-primary-300 bg-primary-gradient"
                    role="progressbar"
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="p-3">
                <div className="fw-500 fs-xs">Helpfulness</div>
                <div className="progress progress-xs mt-2">
                  <div
                    className="progress-bar bg-primary-300 bg-primary-gradient"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="p-3">
                <div className="fw-500 fs-xs">Knowledge</div>
                <div className="progress progress-xs mt-2">
                  <div
                    className="progress-bar bg-primary-300 bg-primary-gradient"
                    role="progressbar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="p-3">
                <div className="fw-500 fs-xs">Bedside manners</div>
                <div className="progress progress-xs mt-2">
                  <div
                    className="progress-bar bg-danger-300 bg-warning-gradient"
                    role="progressbar"
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="p-3 text-center">
                <a href="#" className="btn-link font-weight-bold">
                  View all
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-g">
          <div className="row row-grid no-gutters">
            <div className="col-12">
              <div className="p-3">
                <h2 className="mb-0 fs-xl">Current Project</h2>
              </div>
            </div>
            <div className="col-12">
              <div className="p-3">
                <h5 className="text-danger">
                  Xray improvement algorythm
                  <small className="mt-0 mb-3 text-muted">
                    Migration of new API to local servers
                  </small>
                  <span className="badge badge-danger fw-n position-absolute pos-top pos-right mt-3 mr-3">
                    Delayed
                  </span>
                </h5>
                <div className="row fs-b fw-300">
                  <div className="col text-left">Progress</div>
                  <div className="col text-right">26%</div>
                </div>
                <div className="progress progress-xs d-flex mb-2 mt-1">
                  <span
                    className="progress-bar bg-danger-500 progress-bar-striped"
                    role="progressbar"
                    aria-valuenow="26"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></span>
                </div>
                <div className="fw-300 mb-3">
                  <div className="row">
                    <div className="col">Budget</div>
                    <div className="col text-right text-danger">
                      -$155,473.70
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="p-3">
                <h5>
                  Radioactive Isotope Research
                  <small className="mt-0 mb-3 text-muted">
                    Accelerator based methods of Technetium99m production –
                    target preparation and processing and beam monitoring
                    technologies
                  </small>
                  <span className="badge badge-primary fw-n position-absolute pos-top pos-right mt-3 mr-3">
                    A
                  </span>
                </h5>
                <div className="row fs-b fw-300">
                  <div className="col text-left">Progress</div>
                  <div className="col text-right">90%</div>
                </div>
                <div className="progress progress-xs d-flex mb-2 mt-1">
                  <span
                    className="progress-bar bg-primary-500 progress-bar-striped"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></span>
                </div>
                <div className="fw-300 mb-0">
                  <div className="row">
                    <div className="col">Budget</div>
                    <div className="col text-right">$1,325,987.30</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="p-3 text-center">
                <div className="text-left fw-400 ">
                  <div className="text-secondary mb-1">Project Owners</div>
                  <div className="fs-sm d-flex align-items-center">
                    <a href="#" className="btn-m-s">
                      <img
                        src="img/demo/avatars/avatar-a.png"
                        className="profile-image-sm rounded-circle"
                        alt="aa"
                      />
                    </a>
                    <a href="#" className="btn-m-s">
                      <img
                        src="img/demo/avatars/avatar-b.png"
                        className="profile-image-sm rounded-circle"
                        alt="aa"
                      />
                    </a>
                    <a href="#" className="btn-m-s">
                      <img
                        src="img/demo/avatars/avatar-c.png"
                        className="profile-image-sm rounded-circle"
                        alt="aa"
                      />
                    </a>
                    <a href="#" className="btn-m-s">
                      <img
                        src="img/demo/avatars/avatar-e.png"
                        className="profile-image-sm rounded-circle"
                        alt="aa"
                      />
                    </a>
                    <a href="#" className="btn-m-s">
                      <img
                        src="img/demo/avatars/avatar-h.png"
                        className="profile-image-sm rounded-circle"
                        alt="aa"
                      />
                    </a>
                    <a href="#" className="btn-m-s">
                      <img
                        src="img/demo/avatars/avatar-k.png"
                        className="profile-image-sm rounded-circle"
                        alt="aa"
                      />
                    </a>
                    <a href="#" className="btn-m-s fs-xs">
                      <span
                        data-hasmore="+7"
                        className="rounded-circle profile-image-sm"
                      >
                        <img
                          src=""
                          className="profile-image-sm rounded-circle"
                          alt="aa"
                        />
                      </span>
                    </a>
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

export default RightSubProfile;
