import React, { Component } from 'react';

class Trinity extends Component {
    state = {}
    render() {
        return (
            <div className="center-align">
                <h3 style={{ paddingBottom: "25px", color: "#E5E9F0" }}>
                    Front-end Related Skills</h3>
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

                <div style={{ marginRight: "20px" }}>
                    <p style={{ color: "#E5E9F0" }}>
                        The above three are the holy trinity I worship
            </p>
                    <br />
                </div>
            </div>

        );
    }
}

export default Trinity;