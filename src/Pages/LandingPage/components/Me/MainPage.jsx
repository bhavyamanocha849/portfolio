import React, { Component } from "react";

class MainPage extends Component {
  render() {
    return (
      <div>
        <section id="me">
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
          <div className="center-align flow-text" style={{ color: "#D8DEE9" }}>
            <p>Hello, my name's Cliff.</p>
            <p>I'm 22 years old and a self-taught (kinda) developer.</p>
            <p>
              I am looking for a job, please hire me to do your awesome website
              for your blooming business
            </p>
          </div>
          <p className="right-align" style={{ color: "#D8DEE9" }}>
            take a peek at my skills to see what I am capable of
          </p>
        </section>
        <section id="skills" className="section scrollspy">
          <div className="container">
            <div className="column">
              <div className="col s12 left-align">
                <div
                  className="card-panel hoverable z-depth-3"
                  style={{ color: "#5E81AC" }}
                >
                  <span className="card-title">Front End Skills</span>
                  <div>
                    d
                    <img
                      src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
                      alt=""
                    />
                    <img
                      src="https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png"
                      alt=""
                      style={{
                        height: "300px",
                        width: "200px"
                      }}
                    />
                    <img
                      src="https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png"
                      alt=""
                      style={{
                        height: "300px",
                        width: "200px"
                      }}
                    />
                    <img
                      src="https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="col s12 m6 right-align z-depth-3">
                <div className="card hoverable">
                  <span className="card-title">Back End skills</span>
                  <div>
                    <img
                      src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                      alt=""
                    />
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
