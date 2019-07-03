import React, { Component } from "react";
import NaviBar from "./components/navBar/navbar";
import MainPage from "./components/Me/MainPage";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <header>
          <NaviBar />
        </header>
        <div>
          <MainPage />
        </div>
      </div>
    );
  }
}

export default LandingPage;
