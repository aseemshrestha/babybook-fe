import React, { Component } from "react";
import SideMenu from "./partials/SideMenu";
import { withRouter, Redirect } from "react-router-dom";
import Header from "./partials/Header";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import { Modal } from "react-bootstrap";
import BabySubmitModal from "./partials/SubmitBabyModel";
import ApiService from "../service/ApiService";

class MyDiary extends Component {
  state = {
    token: this.props.token,
    username: this.props.username,
    fullName: this.props.fullName,
    isValid: true,
    title: "",
    description: "",
  };

  componentDidMount() {
    if (this.state.token === undefined && this.state.username === undefined) {
      this.setState({
        isValid: false,
      });
    }
  }
  closeHandler = () => {
    this.setState({ showModal: false, message: "" });
  };

  openHandler = () => {
    this.setState({ showModal: true });
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { uploadPercentage } = this.state;
    if (!this.state.isValid) {
      return <Redirect to={"/"} />;
    }

    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.closeHandler}>
          <BabySubmitModal
            token={this.state.token}
            closePopup={this.closeHandler}
          />
        </Modal>
        <div className="page-wrapper">
          <div className="page-inner">
            <SideMenu
              fullName={this.state.fullName}
              openHandler={this.openHandler}
            />

            <div className="page-content-wrapper">
              <Header
                fullName={this.state.fullName}
                email={this.state.username}
              />
              <div className="col-xl-6">
                <div id="panel-1" className="panel">
                  <div className="panel-hdr">
                    <h2>
                      My{" "}
                      <span className="fw-300">
                        <i>diaries</i>
                      </span>
                      <small>( All posts will be private by default )</small>
                    </h2>
                  </div>
                  <div className="panel-container show">
                    <div className="panel-content">
                      <form
                        onSubmit={this.handleSubmit}
                        encType="multipart/form-data"
                      >
                        <div className="form-group">
                          <label className="form-label" htmlFor="simpleinput">
                            Title
                          </label>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            className="form-control"
                            onChange={this.handleChange}
                          />
                          <span className="help-block">
                            What is the post about ? E.g. title of our day's
                            summary( required )
                          </span>
                        </div>
                        <div className="form-group">
                          <label
                            className="form-label"
                            htmlFor="example-textarea"
                          >
                            More
                          </label>
                          <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            rows="5"
                            onChange={this.handleChange}
                          ></textarea>
                          <span className="help-block">
                            More on how your day went.
                          </span>
                        </div>{" "}
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="page-content-overlay"
                data-action="toggle"
                data-class="mobile-nav-on"
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    username: state.auth.username,
    fullName: state.auth.fullName,
  };
};
export default connect(mapStateToProps, null)(withRouter(MyDiary));
