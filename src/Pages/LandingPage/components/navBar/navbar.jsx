import React, { Component } from "react";
import "materialize-css";
class naviBar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-extended" style={{ backgroundColor: "#2E3440" }}>
          <div className="nav-content ">
            <ul className="tabs tabs-transparent ">
              <li className="tab">
                <a id="me">Me</a>
              </li>
              <li className="tab">
                <a id="skills">Skills</a>
              </li>
              <li className="tab">
                <a id="works">My Works</a>
              </li>
              <li className="tab">
                <a id="contactMe">Contact Me</a>
              </li>
              <li className="indicator" />
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default naviBar;
