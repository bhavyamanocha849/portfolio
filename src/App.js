import React, { Component } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <LandingPage />
      </div>
    );
  }
}

export default App;
