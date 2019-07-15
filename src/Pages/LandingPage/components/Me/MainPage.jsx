import React, { Component } from "react";

class MainPage extends Component {
  render() {
    return (
      <div className="container">
        <section id="me">
          <div>
            <div className="col s12 center-align">
              <div
                className="responsive-img center-align"
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
            </div>

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
              <p>
                Since I'm passionate about technology, I'm always striving to
                learn new stuffs. Which is why you can hire me with ease of
                mind.
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
                    <div id="node">
                      <img
                        src="https://nodejs.org/static/images/logo.svg"
                        alt=""
                        height="150px"
                      />
                      <p style={{ color: "#E5E9F0" }}>Node</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="col s12 m6 center-align">
                  <div>
                    <h3 style={{ color: "#E5E9F0" }}>Other Skills</h3>
                    <div id="git" className="col s12 m6 center-align">
                      <img
                        src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png"
                        alt=""
                        style={{ height: "80px" }}
                      />
                      <p style={{ color: "#E5E9F0" }}>Github </p>
                    </div>

                    <div id="sql" className="col s12 m6 center-align">
                      <img
                        src="https://seeklogo.com/images/M/MySQL-logo-F6FF285A58-seeklogo.com.png"
                        alt=""
                        style={{ height: "80px" }}
                      />
                      <p style={{ color: "#E5E9F0" }}>MySQL</p>
                    </div>
                    <div className="col s12 m6 center-align" id="mongodb">
                      <img
                        src="https://seeklogo.com/images/M/mongodb-logo-427DDF8FDE-seeklogo.com.png"
                        alt=""
                        style={{ height: "80px", width: "auto" }}
                      />
                      <p style={{ color: "#E5E9F0" }}>MongoDB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="works" className="section scrollspy">
          <div className="flow-text center-align">
            <p>Site under construction</p>
            <img
              className="responsive-img"
              src="https://cdn.dribbble.com/users/1791559/screenshots/4465351/wip.gif"
              alt=""
            />
          </div>
        </section>
        <section id="contactMe" className="section scrollspy">
          <div className="col s12 m6 l4 center-align">
            <h4 style={{ color: "#E5E9F0", paddingBottom: "100px" }}>
              To get in touch with me or just wanna drop by and say hi:
            </h4>

            <h5 style={{ color: "#E5E9F0" }}>htinwana.dev@gmail.com</h5>
          </div>
        </section>
      </div>
    );
  }
}

export default MainPage;
