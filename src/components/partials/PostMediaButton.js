import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostMediaButton extends Component {
  render() {
    return (
      <div>
        <div className="card border mb-g">
          <div className="card-body pl-4 pt-4 pr-4 pb-0">
            <div className="d-flex flex-column">
              <div className="card-body">
                <span className="card-text">Caputure Memories With</span>
                <br />
                <hr />
                <Link to="/submit-posts" className="btn btn-primary">
                  Photos
                </Link>{" "}
                <Link to="/submit-video" className="btn btn-primary">
                  Videos
                </Link>{" "}
                <Link to="/my-diary" className="btn btn-primary">
                  My Diary
                </Link>{" "}
                <br />
                <small className="card-text">
                  Any events you want to capture of your child.
                </small>
                <hr />
                <p className="card-text">
                  <Link to="#">Write Article with us</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostMediaButton;
