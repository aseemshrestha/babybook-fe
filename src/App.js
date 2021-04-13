import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Footer from "./components/Footer";
import ForgotPassword from "./components/ForgotPassword";
import PasswordReset from "./components/PasswordReset";
import Dashboard from "./components/Dashboard";
import ImagePost from "./components/PostImages";
import VideoPost from "./components/PostVideo";
import MyDiary from "./components/PostDiary";
import MyPage from "./components/Mypage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/password-reset" component={PasswordReset} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/submit-posts" component={ImagePost} />
          <Route exact path="/submit-video" component={VideoPost} />
          <Route exact path="/my-diary" component={MyDiary} />
          <Route exact path="/my-page" component={MyPage} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
