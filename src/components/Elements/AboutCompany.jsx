import React from 'react';
import { NavLink } from 'react-router-dom';

class AboutCompany extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 bg-white">
                    <div className="container">
                        <div className="section-content ">
                            <div className="m-service-containt text-black">
                                <div className="row">
                                    <div className="col-md-5 col-sm-12">
                                        <div className="service-about-left">
                                            <div className="mt-media">
                                                <img src={require('./../../images/allimg/Why Targefy.png')} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-sm-12">
                                        <div className="service-about-right m-b30">
                                            <h3 className="m-t0" id="whytargefy">Our Data-Driven Approach</h3>
                                            <p >At Targefy, we pride ourselves on our data-driven approach, which sets us apart from other digital marketing agencies. By leveraging the power of data, we craft strategies that are not only innovative but also highly effective. Here's how our data-driven methodology makes us unique and ensures that we deliver exceptional results for our clients.</p>
                                            {/* <div className="call-for-quote-outer">
                                                <div className="call-quote">
                                                    <span>Call For a Quote:</span>
                                                    <h4>(321) 456 6789</h4>
                                                </div>
                                                <div className="call-estimate bg-dark">
                                                <NavLink to={"#"} className="site-button-secondry btn-effect">Online Estimate Form</NavLink>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default AboutCompany;