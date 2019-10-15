import React, { Component } from "react";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col s12 center-align'>
            <div>
              <h3 style={{ paddingBottom: "25px", color: "#E5E9F0" }}>
                Front-end Related Skills
              </h3>
              <div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div id='css' className='col s4 m6 l4 center-align'>
                    <img
                      src='https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png'
                      alt=''
                      style={{
                        height: "100px"
                      }}
                    />
                    <p style={{ color: "#E5E9F0" }}>CSS</p>
                  </div>
                  <div className='col s4 m6 l4 center-align'>
                    <img
                      src='https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png'
                      alt=''
                      style={{
                        height: "100px"
                      }}
                    />
                    <p style={{ color: "#E5E9F0" }}>HTML</p>
                  </div>
                  <div className='col s4 m6 l4 center-align'>
                    <img
                      src='https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png'
                      alt=''
                      style={{ height: "100px" }}
                    />
                    <p style={{ color: "#E5E9F0" }}>Javascript</p>
                  </div>
                </div>
              </div>

              <div>
                <p style={{ color: "#E5E9F0" }}>
                  The above three are the holy trinity I worship
                </p>
                <br />
              </div>
            </div>
          </div>

          <div className='col s12 center-align'>
            <div>
              <h5 style={{ color: "#E5E9F0", paddingBottom: "25px" }}>
                I like to use these frameworks
              </h5>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div id='react' className='col s6 m6 l4 center-align'>
                <img
                  src='https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png'
                  alt=''
                  style={{ height: "100px" }}
                />
                <p style={{ color: "#E5E9F0" }}>React</p>
              </div>
              <div id='Vue' className='col s6 m6 l4 center-align'>
                <img
                  src='https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png'
                  alt=''
                  style={{ height: "100px" }}
                />
                <p style={{ color: "#E5E9F0" }}>Vue</p>
              </div>
              <div className='col s4 m6 l4' id='bootstrap'>
                <img
                  src='https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png'
                  style={{ height: "100px" }}
                  alt=''
                />
                <p style={{ color: "#E5E9F0" }}>Bootstrap</p>
              </div>
              <div className='col s4 m6 l4 center-align'>
                <img
                  src='https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png'
                  alt=''
                  style={{ height: "100px" }}
                />
                <p style={{ color: "#E5E9F0" }}>Tailwind</p>
              </div>
              <div id='Materialize' className='col s12 m4 l6 center-align'>
                <img
                  src='https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png'
                  alt=''
                  style={{ height: "100px" }}
                />
                <p style={{ color: "#E5E9F0" }}>Materialize</p>
              </div>

              <div className='col s12 m6 l12 center-align'>
                <h6 style={{ marginLeft: "20rem", color: "#E5E9F0" }}>
                  ... and many more to come.
                </h6>
              </div>
            </div>
          </div>

          <div className='column'>
            <div className='col s12 m6 center-align'>
              <div>
                <h4 style={{ color: "#E5E9F0" }}>Back End skills</h4>
                <div
                  id='node'
                  className='col s12 m6'
                  style={{ marginTop: "10%" }}
                >
                  <img
                    src='https://nodejs.org/static/images/logo.svg'
                    alt=''
                    height='100px'
                  />
                  <p style={{ color: "#E5E9F0" }}>Node</p>
                </div>
                <div className='col s6 m6'>
                  <img
                    src='https://seeklogo.com/images/E/express-js-logo-FA36FF1D3F-seeklogo.com.png'
                    height='25px'
                    width='100px'
                    alt=''
                    style={{ marginTop: "2rem" }}
                  />
                  <p style={{ color: "#E5E9F0" }}>Express</p>
                </div>
                <div className='col s6 m6'>
                  <img
                    src='https://sailsjs.com/images/logos/sails-logo_ltBg_ltBlue.png'
                    alt=''
                    height='50px'
                    width='100px'
                  />
                  <p style={{ color: "#E5E9F0" }}>SailsJs</p>
                </div>
              </div>
            </div>
          </div>

          <div className='column'>
            <div className='col s12 m6 center-align'>
              <div>
                <h3 style={{ color: "#E5E9F0" }}>Other Skills</h3>
                <div id='git' className='col s6 m6 center-align'>
                  <img
                    src='https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png'
                    alt=''
                    style={{ height: "80px" }}
                  />
                  <p style={{ color: "#E5E9F0" }}>Github </p>
                </div>

                <div id='sql' className='col s6 m6 center-align'>
                  <img
                    src='https://seeklogo.com/images/M/MySQL-logo-F6FF285A58-seeklogo.com.png'
                    alt=''
                    style={{ height: "80px" }}
                  />
                  <p style={{ color: "#E5E9F0" }}>MySQL</p>
                </div>
                <div className='col s12 m6 center-align' id='mongodb'>
                  <img
                    src='https://seeklogo.com/images/M/mongodb-logo-427DDF8FDE-seeklogo.com.png'
                    alt=''
                    style={{ height: "80px", width: "auto" }}
                  />
                  <p style={{ color: "#E5E9F0" }}>MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
