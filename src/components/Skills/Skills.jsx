import React, { Component } from "react";
import Trinity from "./components/Trinity";
import FrontendFrameworks from "./components/FrontendFrameworks";
import Others from "./components/Others";
import Backend from "./components/Backend"

class Skills extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <Trinity />
          <FrontendFrameworks />
          <Backend />
          <Others />
        </div>
      </div>
    );
  }
}

export default Skills;
