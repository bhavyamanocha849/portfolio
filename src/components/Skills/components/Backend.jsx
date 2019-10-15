import React, { Component } from 'react';

class Backend extends Component {
    state = {}
    render() {
        return (<div className='column'>
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
        );
    }
}

export default Backend;