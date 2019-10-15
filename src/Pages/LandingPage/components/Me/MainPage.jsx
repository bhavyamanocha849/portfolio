import React, { Component } from "react";
import Skills from "./Skills/Skills";
import Me from "./Me/Me";

class MainPage extends Component {
  render() {
    return (
      <div className='container'>
        <section id='me'>
          <Me />
        </section>
        <section id='skills' className='section scrollspy'>
          <Skills />
        </section>
        <section id='works' className='section scrollspy'>
          <div className='flow-text center-align'>
            <p>Site under construction</p>
            <img
              className='responsive-img'
              src='https://cdn.dribbble.com/users/1791559/screenshots/4465351/wip.gif'
              alt=''
            />
          </div>
        </section>
        <section id='contactMe' className='section scrollspy'>
          <div className='col s12 m6 l4 center-align'>
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
