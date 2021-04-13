import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import RightSubProfile from "./RightSubProfile";
import PostMediaButton from "./PostMediaButton";
import { POST_DATA } from "../../constants/Constants";
import ApiService from "../../service/ApiService";
import PostComment from "./PostComment";
import Moment from "react-moment";
import Gallery from "react-grid-gallery";
//import ReactBnbGallery from 'react-bnb-gallery';
//import 'react-bnb-gallery/dist/style.css'
import Avatar from "react-avatar-edit";
import SideMenu from "./SideMenu";
//https://www.youtube.com/watch?v=w6--zBo1ai8
class Profile extends Component {
  state = {
    postData: [],
    preview: null,
    src: null,
    uploadButtonVisible: false,
    file: "",
  };
  componentDidMount() {
    /* this.props.dispatch(fetchPosts(this.props.token)).catch((error) => {
      console.log(error);
    }); */
    if (localStorage.getItem(POST_DATA) == null) {
      ApiService.fetchPost(this.props.token)
        .then((response) => {
          localStorage.setItem(POST_DATA, JSON.stringify(response.data));
          this.setState({
            postData: JSON.parse(localStorage.getItem(POST_DATA)),
            //  postData: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.setState({
        postData: JSON.parse(localStorage.getItem(POST_DATA)),
      });
    }
  }
  onClose = () => {
    this.setState({ preview: null });
  };

  onCrop = (preview) => {
    this.setState({ preview });
  };

  galleryStyle() {
    return {
      //float:'left',
      width: "auto",
      height: "auto",
      margin: "auto",
      lineHeight: 0,
      //marginLeft:'10px',
      //padding:'5px',
      display: "inline-block",
      padding: "10px 3",
    };
  }
  singleStyle() {
    return {
      maxWidth: "100%",
      height: "auto",
      width: "auto",
    };
  }
  border() {
    return {
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "black",
    };
  }
  labelStyle() {
    return {
      fontWeight: "400",
      color: "#886ab5",
      textDecoration: "none",
    };
  }
  onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 1000000) {
      alert("File is too big!");
      elem.target.value = "";
    } else {
      this.setState({
        uploadButtonVisible: true,
        file: elem.target.files[0],
      });
    }
  };
  
  uploadAvatar = () => {
    let formData = new FormData();
    formData.append('file', this.state.file);
    
  };

  onClose = () => {
    this.setState({
      uploadButtonVisible: false,
      preview: null,
    });
  };

  render() {
    let posts;

    if (this.state.postData.length > 0) {
      posts = this.state.postData.map((data, i) => (
        <div className="card mb-2" key={i}>
          <div className="card mb-g">
            <div className="card-body pb-0 px-4">
              <div className="d-flex flex-row pb-3 pt-2  border-top-0 border-left-0 border-right-0">
                <span className="profile-image rounded-circle d-block">
                  <img
                    src={require("../../img/avatars/1.png")}
                    alt=""
                    aria-roledescription="logo"
                  />
                </span>{" "}
                &nbsp;&nbsp;&nbsp;
                <h6 className="mb-0 flex-1 text-dark fw-500">
                  {this.props.fullName}
                  <span className="card-text">
                    &nbsp;&nbsp;&nbsp;{data.postType.toLowerCase()} <br />
                    {data.albumName} <br />
                    <span>
                      {" "}
                      {data.media.length > 1
                        ? "Displaying 4 out of " + data.media.length
                        : ""}
                    </span>
                  </span>

                  <small className="m-0 l-h-n">
                    <Link to="#">{data.title}</Link>
                  </small>
                </h6>
                <span className="text-muted fs-xs opacity-70">
                  <Moment fromNow>{data.lastUpdated}</Moment>
                </span>
              </div>

              {
                <div className="pb-3 pt-2 border-top-0 border-left-0 border-right-0 text-muted">
                  {data.description}
                  {data.media.length > 1 ? (
                    <Gallery
                      images={data.media.map((m, k) => {
                        return {
                          src: m.mediaLocation,
                          thumbnail: m.mediaLocation,
                        };
                      })}
                      thumbnailStyle={this.singleStyle}
                      maxRows={4}
                      rowHeight={200}
                    />
                  ) : (
                    <Gallery
                      images={data.media.map((m, k) => {
                        return {
                          src: m.mediaLocation,
                          thumbnail: m.mediaLocation,
                        };
                      })}
                      thumbnailStyle={this.singleStyle}
                      maxRows={1}
                      rowHeight={380}
                    />
                  )}
                </div>
              }
            </div>        
          </div>
          <PostComment />
        </div>
      ));
    }

    // console.log('length', data !== null ? data.length : 0);
    return (
      <div>
        <main id="js-page-content" role="main" fame="page-content">
          <div className="row">
            <div className="col-lg-1 col-xl-3 order-lg-1 order-xl-1">
              <div className="card mb-g rounded-top">
                <div className="row no-gutters row-grid">
                  <div className="col-12">
                    <div className="d-flex flex-column align-items-center justify-content-center p-4">
                      <h6 className="mb-0 fw-100 text-center mt-1">
                        <img
                          src={require("../../img/demo/avatars/avatar-admin-lg.png")}
                          className="rounded-circle shadow-2 img-thumbnail"
                          alt=""
                        ></img>
                        <h5 className="mb-0 fw-700 text-center mt-3">
                          Dr. Codex Lantern
                          <small className="text-muted mb-0">
                            Toronto, Canada
                          </small>
                        </h5>
                        <Avatar
                          width={180}
                          height={125}
                          onCrop={this.onCrop}
                          lineWidth={90}
                          onClose={this.onClose}
                          src={this.state.src}
                          borderStyle={this.border}
                          label="Change this picture"
                          labelStyle={this.labelStyle}
                          onBeforeFileLoad={this.onBeforeFileLoad}
                          onClose={this.onClose}
                        />
                        <img src={this.state.preview} />

                        <button
                          type="button"
                          className="btn btn-primary btn-block"
                          style={{
                            visibility: this.state.uploadButtonVisible
                              ? "visible"
                              : "hidden",
                          }}
                          onClick={this.uploadAvatar}
                        >
                          Upload
                        </button>
                      </h6>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center py-3">
                      <h5 className="mb-0 fw-700">
                        764
                        <small className="text-muted mb-0">Profile Views</small>
                      </h5>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center py-3">
                      <h5 className="mb-0 fw-700">
                        1,673
                        <small className="text-muted mb-0">Post Views</small>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-g">
                <div className="row row-grid no-gutters">
                  <div className="col-12">
                    <div className="p-3">
                      <h2 className="mb-0 fs-xl">Photos</h2>
                    </div>
                  </div>
                  <div className="col-4">
                    <a
                      href="#"
                      className="text-center px-3 py-4 d-flex position-relative height-10 border"
                    >
                      <span className="position-absolute pos-top pos-left pos-right pos-bottom"></span>
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      href="#"
                      className="text-center px-3 py-4 d-flex position-relative height-10 border"
                    >
                      <span className="position-absolute pos-top pos-left pos-right pos-bottom"></span>
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      href="#"
                      className="text-center px-3 py-4 d-flex position-relative height-10 border"
                    >
                      <span className="position-absolute pos-top pos-left pos-right pos-bottom"></span>
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      href="#"
                      className="text-center px-3 py-4 d-flex position-relative height-10 border"
                    >
                      <span className="position-absolute pos-top pos-left pos-right pos-bottom"></span>
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      href="#"
                      className="text-center px-3 py-4 d-flex position-relative height-10 border"
                    >
                      <span className="position-absolute pos-top pos-left pos-right pos-bottom"></span>
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      href="#"
                      className="text-center px-3 py-4 d-flex position-relative height-10 border"
                    >
                      <span className="position-absolute pos-top pos-left pos-right pos-bottom"></span>
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      href="#"
                      className="text-center px-3 py-4 d-flex position-relative height-10 border"
                    >
                      <span className="position-absolute pos-top pos-left pos-right pos-bottom"></span>
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      href="#"
                      className="text-center px-3 py-4 d-flex position-relative height-10 border"
                    >
                      <span className="position-absolute pos-top pos-left pos-right pos-bottom"></span>
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      href="#"
                      className="text-center px-3 py-4 d-flex position-relative height-10 border"
                    >
                      <span className="position-absolute pos-top pos-left pos-right pos-bottom"></span>
                    </a>
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
              
            </div>
            <div className="col-lg-12 col-xl-6 order-lg-3 order-xl-2">
              <PostMediaButton />
              {posts}
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
/* const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

const mapStateToProps = (state) => {
  return {
    postData: state.post.postData,
  };
}; */

const mapStateToProps = (state) => {
  return {
    fullName: state.auth.fullName,
  };
};
export default connect(mapStateToProps, null)(withRouter(Profile));
