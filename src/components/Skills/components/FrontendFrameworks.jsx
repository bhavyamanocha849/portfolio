import React, { Component } from 'react';
class FrontendFrameworks extends Component {
    state = {}
    render() {
        return (

            <div className='col s12 center-align'>
                <div>
                    <h5 style={{ color: "#E5E9F0", paddingBottom: "25px" }}>
                        I like to use these frameworks</h5>
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


        );
    }
}

export default FrontendFrameworks;