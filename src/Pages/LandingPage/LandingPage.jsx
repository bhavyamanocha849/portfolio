import React, { Component } from "react";
import NaviBar from "./components/navBar/navbar";
import Me from "./components/Me/Me";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <header>
          <NaviBar />
        </header>
        <div>
          <Me />
        </div>
      </div>
    );
  }
}

export default LandingPage;
