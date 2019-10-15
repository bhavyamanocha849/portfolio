import React, { Component } from "react";
import "materialize-css";

class naviBar extends Component {
  render() {
    return (
      <nav className='nav-extended' style={{ backgroundColor: "#2E3440" }}>
        <div className='nav-content '>
          <div className='row'>
            <div className='col s12'>
              <ul className='tabs tabs-transparent '>
                <li className='tab'>
                  <a href='#me' id='meTab' className='active'>
                    Me
                  </a>
                </li>
                <li className='tab '>
                  <a href='#skills' id='skillTab'>
                    Skills
                  </a>
                </li>
                <li className='tab '>
                  <a href='#works' id='workTab'>
                    My Works
                  </a>
                </li>
                <li className='tab '>
                  <a href='#contactMe' id='contactMeTab'>
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default naviBar;
