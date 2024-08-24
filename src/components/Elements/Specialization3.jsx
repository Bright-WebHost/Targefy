import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-6.png');

class Specialization3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-dark mobile-page-padding" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            {/* <div className="section-head m-b50 text-white text-center">
                                <h3 className="m-t0">We are all constructed out of our self dialogue.</h3>
                                <p>Wisi enim ad minim veniam, quis nostrud exerci tation ullamcorperadipiscing elit, sed diam nonummy
              nibh suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                            </div> */}
                            <div className="section-full p-t10 p-b10 inner-page-padding">
                        <div className="container">
                            <div className="faq-1 bg-gray  p-a50">
                                {/* TITLE START */}
                                <div className="section-head">
                                    <div className="mt-separator-outer separator-center">
                                        <div className="mt-separator">
                                            <h2 className="text-uppercase sep-line-one ">The Targefy <span style={{color:'#bb0000'}}> Advantage</span> </h2>
                                        </div>
                                    </div>
                                </div>
                                {/* TITLE END */}
                                {/* Accordian */}
                                <div className="mt-accordion acc-bg-white" id="accordion5">
                                    <div className="panel mt-panel">
                                        <div className="acod-head acc-actives">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseOne5" data-parent="#accordion5">
                                                Marketing and Sales 
                  <span className="indicator"><i className="fa fa-plus" /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne5" className="acod-body collapse in">
                                            <div className="acod-content p-tb15">
                                            <p> Leveraging our honorary advisor's 40 years of extensive marketing expertise and our founders' deep sales know-how, we create campaigns that not only engage but also convert, driving tangible business growth through proven principles and cutting-edge trends</p>
              </div>
                                        </div>
                                    </div>
                                    <div className="panel mt-panel">
                                        <div className="acod-head">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseTwo5" className="collapsed" data-parent="#accordion5">
                                                Precision Targeting
                  <span className="indicator"><i className="fa fa-plus" /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo5" className="acod-body collapse">
                                            <div className="acod-content p-tb15"><p>Utilizing advanced technology and data-driven insights, we ensure your message reaches the right audience at the right time.</p></div>
                                        </div>
                                    </div>
                                    <div className="panel mt-panel">
                                        <div className="acod-head">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseThree5" className="collapsed" data-parent="#accordion5">
                                                Creative Excellence
                  <span className="indicator"><i className="fa fa-plus" /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree5" className="acod-body collapse">
                                            <div className="acod-content p-tb15"><p>Our team of innovative creators brings your brand to life with captivating content, stunning visuals, and compelling storytelling.</p></div>
                                        </div>
                                    </div>
                                    <div className="panel mt-panel">
                                        <div className="acod-head">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseFour5" className="collapsed" data-parent="#accordion5">
                                                360 Marketing
                  <span className="indicator"><i className="fa fa-plus" /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFour5" className="acod-body collapse">
                                            <div className="acod-content p-tb15"><p>From SEO and social media to website development / optimization as well as email marketing, our tailored approach ensures we reach your target customer, wherever they are. </p></div>
                                        </div>
                                    </div>
                                    <div className="panel mt-panel">
                                        <div className="acod-head">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseFive5" className="collapsed" data-parent="#accordion5">
                                                Proven Success
                  <span className="indicator"><i className="fa fa-plus" /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFive5" className="acod-body collapse">
                                            <div className="acod-content p-tb15">
                                            <p>Our proven track record boasts numerous success stories and satisfied clients who’ve achieved remarkable growth through our creative ideas. </p>
              </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                            {/* <div className="row">
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/services/1.jpg')}  alt=""/>
                                        <div className="figcaption">
                                            <h4>Concept and Design</h4>
                                            <p>Est notare quam littera gothica, quam nunc putamus parum claram.</p>
                                            <NavLink to="/project-detail"><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/services/2.jpg')} alt="" />
                                        <div className="figcaption">
                                            <h4>Refurbishment</h4>
                                            <p>Est notare quam littera gothica, quam nunc putamus parum claram.</p>
                                            <NavLink to="/project-detail"><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/services/3.jpg')} alt=""/>
                                        <div className="figcaption bg-dark">
                                            <h4>General Builder</h4>
                                            <p>Est notare quam littera gothica, quam nunc putamus parum claram.</p>
                                            <NavLink to="/project-detail"><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Specialization3;