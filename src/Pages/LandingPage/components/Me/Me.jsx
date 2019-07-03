import React, { Component } from "react";

class Me extends Component {
  render() {
    return (
      <div>
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
        <div className="center-align aboutMyself">
          <p>Hello, my name's Cliff.</p>
          <p>I'm 22 years old and a self-taught (kinda) developer.</p>
          <p>
            I am looking for a job, please hire me to do your awesome website
            for your blooming business
          </p>
        </div>
        <p style={{ textAlign: "right" }}>
          take a peek at my skills to see what I am capable of
        </p>
      </div>
    );
  }
}

export default Me;
