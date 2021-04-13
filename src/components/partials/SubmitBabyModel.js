import React, { Component } from "react";
import { Modal } from "react-bootstrap";
//import { withRouter, Redirect } from "react-router-dom";
import DatePicker from "react-datepicker";
import moment from "moment";
import "font-awesome/css/font-awesome.min.css";
import "react-datepicker/dist/react-datepicker.css";
import ApiService from "../../service/ApiService";
//import { connect } from "react-redux";
//import registerBaby from "../../store/actions/registerBabyAction";
import { LS_CHILD_INFO } from "../../constants/Constants";

class SubmitBabyModel extends Component {
  state = {
    startDate: new Date(),
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    errors: [],
    isSuccess: false,
  };
  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let childObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      dob: moment(this.state.startDate, "MM-DD-YYYY"),
    };
    const headerToken = {
      "Content-Type": "application/json",
      Authorization: this.props.token,
    };
    ApiService.registerBaby(childObj, headerToken)
      .then((response) => {
        this.setState({
          isSuccess: true,
          message: "Form has been submitted successfully.",
        });
        this.props.closePopup();
        localStorage.removeItem(LS_CHILD_INFO);
      })
      .catch((error) => {
        console.log(error.response.data);
        this.setState({
          errors: error.response.data.message,
        });
      });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    let dob = this.state.startDate;
    const errs =
      this.state.errors !== undefined
        ? this.state.errors.map((value, index) => {
            return <li key={index}>{value}</li>;
          })
        : "";
    if (this.state.isSuccess) {
      // return <Redirect to={"/dashboard"} />;
      window.location.href = "/dashboard";
    }
    return (
      <div>
        <Modal.Header closeButton>
          <Modal.Title>Submit Child Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!this.state.isSuccess && (
            <span className="text-left pt-1 text-danger">
              {errs} <hr />
            </span>
          )}
          {this.state.isSuccess && (
            <span className="text-left pt-1 text-danger">
              {this.state.message} <hr />
            </span>
          )}
          <span className="help-block">All fields are mandatory fields.</span>
          <br />
          <br />
          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <label className="form-label" htmlFor="basic-addon1">
                FirstName
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-child"></i>
                  </span>
                </div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  placeholder="FirstName"
                  aria-label="Firstname"
                  aria-describedby="basic-addon1"
                  onChange={this.changeHandler}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="basic-addon1">
                LastName
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-child"></i>
                  </span>
                </div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  placeholder="LastName"
                  aria-label="Lastname"
                  aria-describedby="basic-addon1"
                  onChange={this.changeHandler}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="basic-addon1">
                Date of Birth <span className="help-block">(mm/dd/yyyy)</span>
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-birthday-cake"></i>
                  </span>
                </div>

                <DatePicker
                  selected={dob}
                  onChange={this.handleChange}
                  type="text"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  className="form-control"
                  placeholder="Date of Birth"
                  aria-label="Date of Birth"
                  aria-describedby="basic-addon1"
                  maxDate={new Date()}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="gender">
                Gender: <br />
              </label>
              <div className="frame-wrap">
                <fieldset>
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    id="gender"
                    onChange={this.changeHandler}
                  />
                  &nbsp;
                  <small>Boy</small>
                  &nbsp; &nbsp;
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    id="gender"
                    onChange={this.changeHandler}
                  />
                  &nbsp;
                  <small>Girl</small>
                </fieldset>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-block waves-effect waves-themed"
            >
              <span className="fa fa-check mr-1"></span>
              Submit
            </button>
          </form>
        </Modal.Body>
      </div>
    );
  }
}

export default SubmitBabyModel;
