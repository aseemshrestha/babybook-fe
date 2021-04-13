import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostComment extends Component {
  render() {
    return (
      <div>
        <div className="card-body pb-0 px-4">
          <div className="d-flex align-items-center demo-h-spacing py-3">
            <a href="#" className="d-inline-flex align-items-center text-dark">
              <i className="fas fa-heart fs-xs mr-1 text-danger"></i>{" "}
              <span>2 Likes</span>
            </a>
            <a href="#" className="d-inline-flex align-items-center text-dark">
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
                <p className="mb-0">Excellent work, looking forward to it.</p>
              </div>
            </div>
            <hr className="m-0 w-100" />

            <div className="d-flex flex-row w-100 py-4">
              <div className="d-inline-block align-middle status status-sm status-success mr-3">
                <span className="profile-image profile-image-md rounded-circle d-block mt-1"></span>
              </div>
              <div className="mb-0 flex-1 text-dark">
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
    );
  }
}

export default PostComment;
