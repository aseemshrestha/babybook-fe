import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import SideMenu from "./partials/SideMenu";
import Profile from "./partials/Profile";
import Header from "./partials/Header";
import BabySubmitModal from "./partials/SubmitBabyModel";
import { Modal } from "react-bootstrap";
import ApiService from "../service/ApiService";
import { LS_CHILD_INFO } from "../constants/Constants";

class MyPage extends Component {
  state = {
    token: this.props.token,
    username: this.props.username,
    fullName: this.props.fullName,
    isValid: true,
    childData: [],
  };

  componentDidMount() {
    if (this.state.token === undefined && this.state.username === undefined) {
      this.setState({
        isValid: false,
      });
    }
    const headerToken = {
      "Content-Type": "application/json",
      Authorization: this.props.token,
    };
    if (localStorage.getItem(LS_CHILD_INFO) == null) {
      ApiService.fetchBabyInfo(this.props.username, headerToken)
        .then((response) => {
          if (response.data.length > 0) {
            localStorage.setItem(LS_CHILD_INFO, JSON.stringify(response.data));
            this.setState({
              childData: JSON.parse(localStorage.getItem(LS_CHILD_INFO)),
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.setState({
        childData: JSON.parse(localStorage.getItem(LS_CHILD_INFO)),
      });
    }
  }
  closeHandler = () => {
    this.setState({ showModal: false, message: "" });
  };

  openHandler = () => {
    this.setState({ showModal: true });
  };

  render() {
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
              babyInfo={this.state.childData}
            />

            <div className="page-content-wrapper">
              <Header
                fullName={this.state.fullName}
                email={this.state.username}
              />

              <Profile
                fullName={this.state.fullName}
                babyInfo={this.state.childData}
                token = {this.state.token}
              />
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
export default connect(mapStateToProps, null)(withRouter(MyPage));
