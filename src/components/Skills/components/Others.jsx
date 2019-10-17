import React, { Component } from 'react';

class Others extends Component {
    state = {}
    render() {
        return (<div className='column'>
            <div className='col s12 m6 center-align'>
                <div>
                    <h3 className="hr" style={{ color: "#E5E9F0" }}>Other Skills</h3>
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
        );
    }
}

export default Others;