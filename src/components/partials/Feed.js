import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSubProfile from "./RightSubProfile";
import PostMediaButton from "./PostMediaButton";

class Feed extends Component {
  render() {
    return (
      <div>
        <main id="js-page-content" role="main" fame="page-content">
          <br />
          <div className="row">
            <div className="col-sm-1 col-xl-1 order-lg-1 order-xl-1"></div>
            <div className="col-lg-12 col-xl-6 order-lg-3 order-xl-2">
             <PostMediaButton />
             
              <div className="card mb-g">
                <div className="card-body pb-0 px-4">
                  <div className="d-flex flex-row pb-3 pt-2  border-top-0 border-left-0 border-right-0">
                    <div className="d-inline-block align-middle status status-success mr-3">
                      <span className="profile-image rounded-circle d-block"></span>
                    </div>
                    <h5 className="mb-0 flex-1 text-dark fw-500">
                      Dr. John Cook PhD
                      <small className="m-0 l-h-n">
                        Human Resources &amp; Psychiatry Division
                      </small>
                    </h5>
                    <span className="text-muted fs-xs opacity-70">3 hours</span>
                  </div>
                  <div className="pb-3 pt-2 border-top-0 border-left-0 border-right-0 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </div>
                  <div className="d-flex align-items-center demo-h-spacing py-3">
                    <a
                      href="#"
                      className="d-inline-flex align-items-center text-dark"
                    >
                      <i className="fas fa-heart fs-xs mr-1 text-danger"></i>{" "}
                      <span>2 Likes</span>
                    </a>
                    <a
                      href="#"
                      className="d-inline-flex align-items-center text-dark"
                    >
                      <i className="fal fa-comment fs-xs mr-1"></i>{" "}
                      <span>2 Comments</span>
                    </a>
                  </div>
                </div>
                <div className="card-body py-0 px-4 border-faded border-right-0 border-bottom-0 border-left-0">
                  <div className="d-flex flex-column align-items-center">
                    <div className="d-flex flex-row w-100 py-4">
                      <div className="d-inline-block align-middle status status-sm status-success mr-3">
                        <span className="profile-image profile-image-md rounded-circle d-block mt-1"></span>
                      </div>
                      <div className="mb-0 flex-1 text-dark">
                        <div className="d-flex">
                          <a href="#" className="text-dark fw-500">
                            Test name
                          </a>
                          <span className="text-muted fs-xs opacity-70 ml-auto">
                            15 minutes
                          </span>
                        </div>
                        <p className="mb-0">
                          Excellent work, looking forward to it.
                        </p>
                      </div>
                    </div>
                    <hr className="m-0 w-100" />

                    <div className="d-flex flex-row w-100 py-4">
                      <div className="d-inline-block align-middle status status-sm status-success mr-3">
                        <span className="profile-image profile-image-md rounded-circle d-block mt-1"></span>
                      </div>
                      <div className="mb-0 flex-1 text-dark">
                        <div className="d-flex">
                          <a href="#" className="text-dark fw-500">
                            Dr. Codex Lantern
                          </a>
                          <span className="text-muted fs-xs opacity-70 ml-auto">
                            3 minutes
                          </span>
                        </div>
                        <p className="mb-0">Congrats mate!</p>
                        <div className="pl-0 d-flex flex-row w-100 pb-0 pt-4">
                          <div className="d-inline-block align-middle status status-sm status-success mr-3">
                            <span className="profile-image profile-image-md rounded-circle d-block mt-1"></span>
                          </div>
                          <div className="mb-0 flex-1 text-dark">
                            <div className="d-flex">
                              <a href="#" className="text-dark fw-500">
                                Dr. John Cook PhD
                              </a>
                              <span className="text-muted fs-xs opacity-70 ml-auto">
                                30 seconds
                              </span>
                            </div>
                            <p className="mb-0">Thanks!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="m-0 w-100" />
                    <div className="py-3 w-100">
                      <textarea
                        className="form-control border-0 p-0 bg-transparent"
                        rows="2"
                        placeholder="add a comment..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-g">
                <div className="card-body pb-0 px-4">
                  <div className="d-flex flex-row pb-3 pt-2  border-top-0 border-left-0 border-right-0">
                    <div className="d-inline-block align-middle status status-success mr-3">
                      <span className="profile-image rounded-circle d-block"></span>
                    </div>
                    <h5 className="mb-0 flex-1 text-dark fw-500">
                      Dr. Codex Lantern
                      <small className="m-0 l-h-n">Chief of Surgery</small>
                    </h5>
                    <span className="text-muted fs-xs opacity-70">1 day</span>
                  </div>
                  <div className="pb-3 pt-2 border-top-0 border-left-0 border-right-0 text-muted">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                    <img
                      src="img/demo/gallery/46.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="d-flex align-items-center demo-h-spacing py-3">
                    <a
                      href="#"
                      className="d-inline-flex align-items-center text-dark"
                    >
                      <i className="fal fa-heart fs-xs mr-1"></i>{" "}
                      <span>37 Likes</span>
                    </a>
                    <a
                      href="#"
                      className="d-inline-flex align-items-center text-dark"
                    >
                      <i className="fal fa-comment fs-xs mr-1"></i>{" "}
                      <span>1 Comment</span>
                    </a>
                  </div>
                </div>
                <div className="card-body py-0 px-4 border-faded border-right-0 border-bottom-0 border-left-0">
                  <div className="d-flex flex-column align-items-center">
                    <div className="d-flex flex-row w-100 py-4">
                      <div className="d-inline-block align-middle status status-sm status-success mr-3">
                        <span className="profile-image profile-image-md rounded-circle d-block mt-1"></span>
                      </div>
                      <div className="mb-0 flex-1 text-dark">
                        <div className="d-flex">
                          <a href="#" className="text-dark fw-500">
                            Sarah McBrook
                          </a>
                          <span className="text-muted fs-xs opacity-70 ml-auto">
                            10 minutes
                          </span>
                        </div>
                        <p className="mb-0">
                          Nice shot! When are you going again?
                        </p>
                      </div>
                    </div>
                    <hr className="m-0 w-100" />
                    <div className="py-3 w-100">
                      <textarea
                        className="form-control border-0 p-0 bg-transparent"
                        rows="2"
                        placeholder="add a comment..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-g">
                <div className="card-body pb-0 px-4">
                  <div className="d-flex flex-row pb-3 pt-2  border-top-0 border-left-0 border-right-0">
                    <div className="d-inline-block align-middle status status-success mr-3">
                      <span className="profile-image rounded-circle d-block"></span>
                    </div>
                    <h5 className="mb-0 flex-1 text-dark fw-500">
                      Dr. Codex Lantern
                      <small className="m-0 l-h-n">Chief of Surgery</small>
                    </h5>
                    <span className="text-muted fs-xs opacity-70">2 days</span>
                  </div>
                  <div className="pb-3 pt-2 border-top-0 border-left-0 border-right-0 text-muted">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt
                    </p>
                    <div className="d-flex overflow-hidden rounded w-100 border">
                      <div className="row no-gutters">
                        <div className="col-2 col-sm-3"></div>
                        <div className="col">
                          <div className="bg-faded flex-1 p-4 h-100">
                            <h6 className="text-dark fw-500">Healthy food</h6>
                            <p className="m-0">
                              sed do eiusmod tempor incididunt ut labore et
                              dolore magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation ullamco sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua. Ut
                              enim ad minim veniam, quis nostrud exercitation
                              ullamco
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center demo-h-spacing py-3">
                    <a
                      href="#"
                      className="d-inline-flex align-items-center text-dark"
                    >
                      <i className="fal fa-heart fs-xs mr-1"></i>{" "}
                      <span>1 Likes</span>
                    </a>
                    <a
                      href="#"
                      className="d-inline-flex align-items-center text-dark"
                    >
                      <i className="fal fa-comment fs-xs mr-1"></i>{" "}
                      <span>0 Comments</span>
                    </a>
                  </div>
                </div>
                <div className="card-body py-0 px-4 border-faded border-right-0 border-bottom-0 border-left-0">
                  <div className="d-flex flex-column align-items-center">
                    <div className="py-3 w-100">
                      <textarea
                        className="form-control border-0 p-0 bg-transparent"
                        rows="2"
                        placeholder="add a comment..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 order-lg-2 order-xl-3">
              <RightSubProfile babyInfo={this.props.babyInfo} />
            </div>{" "}
          </div>
        </main>
      </div>
    );
  }
}

export default Feed;
