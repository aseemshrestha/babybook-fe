import React, { Component } from "react";
import SideMenu from "./partials/SideMenu";
import { withRouter, Redirect } from "react-router-dom";
import Header from "./partials/Header";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import { Modal, ProgressBar } from "react-bootstrap";
import BabySubmitModal from "./partials/SubmitBabyModel";
import ApiService from "../service/ApiService";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import { LS_CHILD_INFO, POST_DATA } from "../constants/Constants";

// Register the plugin
registerPlugin(FilePondPluginFileValidateType, FilePondPluginFileValidateSize);

class Posts extends Component {
  state = {
    token: this.props.token,
    username: this.props.username,
    fullName: this.props.fullName,
    isValid: true,
    files: [],
    title: "",
    description: "",
    album: "",
    uploadPercentage: 0,
    hasBabyRegistered: false,
  };

  componentDidMount() {
    if (this.state.token === undefined && this.state.username === undefined) {
      this.setState({
        isValid: false,
      });
    }
    if (localStorage.getItem(LS_CHILD_INFO) != null) {
      this.setState({
        hasBabyRegistered: true,
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

    if (this.state.files.length >= 1) {
      if (this.state.album === "") {
        alert("Album name is required");
        return;
      }
    }

    const formData = new FormData();
    for (var i = 0; i < this.state.files.length; i++) {
      formData.append("file", this.state.files[i]);
    }
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("album", this.state.album);
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        if (percent < 100) {
          this.setState({ uploadPercentage: percent });
        }
      },
    };
    ApiService.submitPost(formData, this.state.token, options)
      .then((response) => {
        this.setState({ uploadPercentage: 100 }, () => {
          setTimeout(() => {
            this.setState({
              uploadPercentage: 0,
            });
          }, 1000);
        });
        localStorage.removeItem(POST_DATA);
        window.location.href = "/my-page";
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    const { uploadPercentage, hasBabyRegistered } = this.state;

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
                      Document{" "}
                      <span className="fw-300">
                        <i>memories</i>
                      </span>
                      <small>( All posts will be private by default )</small>
                    </h2>
                  </div>

                  <div className="panel-container show">
                    <div className="panel-content">
                      <span>
                        {!hasBabyRegistered && (
                          <span className="help-text">
                            <code>
                              You need to register your child. Please do
                              register to submit this form.
                            </code>
                            <br />
                            <br />
                          </span>
                        )}
                      </span>
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
                            What is the post about ? E.g. any events like
                            birthdays or casual ( required )
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
                            Describe this memory.
                          </span>
                        </div>
                        <i className="fa fa-photo"></i> Photos
                        <hr />
                        <div className="form-group">
                          <label
                            className="form-label"
                            htmlFor="example-Image Upload"
                          >
                            Upload photos ( if any )
                          </label>

                          <FilePond
                            //  ref={(ref) => (this.pond = ref)}
                            files={this.state.files}
                            allowMultiple={true}
                            maxFiles={100}
                            acceptedFileTypes={["image/*"]}
                            maxFileSize={"5MB"}
                            onupdatefiles={(fileItems) => {
                              this.setState({
                                files: fileItems.map(
                                  (fileItem) => fileItem.file
                                ),
                              });
                            }}
                          ></FilePond>
                        </div>
                        <div className="form-group">
                          {uploadPercentage > 0 && (
                            <ProgressBar
                              now={uploadPercentage}
                              active="true"
                              label={`${uploadPercentage}%`}
                            />
                          )}
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="album">
                            Album Name
                          </label>
                          <input
                            type="text"
                            id="album"
                            name="album"
                            className="form-control"
                            onChange={this.handleChange}
                          />
                          <span className="help-block">
                            Album Name ( required if you are uploading photos)
                          </span>
                        </div>
                        {hasBabyRegistered ? (
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-block"
                          >
                            Submit
                          </button>
                        ) : (
                          <span className="help-block">
                            You need to register your child. Please do register
                            to submit this form.
                          </span>
                        )}
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
export default connect(mapStateToProps, null)(withRouter(Posts));
