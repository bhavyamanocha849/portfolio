import React, { Component } from "react";

class MainPage extends Component {
  render() {
    return (
      <div>
        <section id="me">
          <div className="container">
            <div
              style={{
                width: "300px",
                height: "300px",
                backgroundImage: "url(/img/IMG_8160.jpg)",
                backgroundSize: "cover",
                borderRadius: "100%",
                backgroundPosition: "right top",
                backgroundRepeat: "no-repeat",
                margin: "auto"
              }}
            />
            <div
              className="center-align flow-text"
              style={{ color: "#D8DEE9" }}
            >
              <p>Hello, my name's Cliff.</p>
              <p>I'm 22 years old and a self-taught (kinda) developer.</p>
              <p>
                I am looking for a job, please hire me to do your awesome
                website for your blooming business
              </p>
            </div>
            <p className="right-align" style={{ color: "#D8DEE9" }}>
              take a peek at my skills to see what I am capable of
            </p>
          </div>
        </section>
        <section id="skills" className="section scrollspy">
          <div className="container">
            <div className="row">
              <div className="col s12 center-align">
                <div>
                  <h3 style={{ paddingBottom: "25px", color: "#E5E9F0" }}>
                    Front-end Related Skills
                  </h3>
                  <div>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      <div id="css" className="col s12 m6 l4 center-align">
                        <img
                          src="https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png"
                          alt=""
                          style={{
                            height: "150px"
                          }}
                        />
                        <p style={{ color: "#E5E9F0" }}>CSS</p>
                      </div>
                      <div className="col s12 m6 l4 center-align">
                        <img
                          src="https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png"
                          alt=""
                          style={{
                            height: "150px"
                          }}
                        />
                        <p style={{ color: "#E5E9F0" }}>HTML</p>
                      </div>
                      <div className="col s12 m6 l4 center-align">
                        <img
                          src="https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png"
                          alt=""
                          style={{ height: "150px" }}
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

              <div className="col s12 center-align">
                <div>
                  <h5 style={{ color: "#E5E9F0", paddingBottom: "25px" }}>
                    I like to use these frameworks
                  </h5>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div id="react" className="col s12 m6 center-align">
                    <img
                      src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
                      alt=""
                      style={{ height: "150px" }}
                    />
                    <p style={{ color: "#E5E9F0" }}>React</p>
                  </div>
                  <div id="Vue" className="col s12 m6 center-align">
                    <img
                      src="https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png"
                      alt=""
                      style={{ height: "150px" }}
                    />
                    <p style={{ color: "#E5E9F0" }}>Vue</p>
                  </div>

                  <div id="Materialize" className="col s12 m6 center-align">
                    <img
                      src="https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png"
                      alt=""
                      style={{ height: "150px" }}
                    />
                    <p style={{ color: "#E5E9F0" }}>Materialize</p>
                  </div>
                  <div className="col s12 m6 center-align" id="bootstrap">
                    <img
                      src="https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"
                      style={{ height: "150px" }}
                      alt=""
                    />
                    <p style={{ color: "#E5E9F0" }}>Bootstrap</p>
                  </div>
                  <div className="col s12 m6 l4 center-align">
                    <h5>and many more to come...</h5>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="col s12 m6 center-align">
                  <div>
                    <h3 style={{ color: "#E5E9F0" }}>Back End skills</h3>
                    <div>
                      <img
                        src="https://nodejs.org/static/images/logo.svg"
                        alt=""
                        height="150px"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="col s12 m6 center-align">
                  <div>
                    <span style={{ color: "#E5E9F0" }}>Other Skills</span>
                    <div>
                      <img
                        src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="works" className="section scrollspy">
          <h1 className="center-align ">My Work</h1>
          <div className="flow-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum." "Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum." "Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </div>
        </section>
        <section id="contactMe" className="section scrollspy">
          <h1 className="center-align">Contact Me</h1>
          <div className="flow-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum." "Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum." "Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </div>
        </section>
      </div>
    );
  }
}

export default MainPage;
