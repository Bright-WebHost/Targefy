import React from 'react';
import { NavLink } from 'react-router-dom';

var img1 = require('./../../images/background/bg-6.png');
var img2 = require('./../../images/background/line.png');

class OurStory extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
      loadScript('./assets/js/masonary.js');
      
    };
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b80 bg-dark bg-repeat square_shape2 inner-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        {/* <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator text-white">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">About</span> Summary</h2>
                                </div>
                            </div>
                        </div> */}
                        {/* TITLE END */}
                        <div className="section-content our-story">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/allimg/In-Depth Analysis.webp')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        {/* <h4 className="text-uppercase m-b20">2011-12</h4> */}
                                        <h4 className="m-b20">In-Depth Analysis and Insights</h4>
                                        <p className='whytargefy'>We begin every project with a thorough analysis of your current digital footprint. Our team dives deep into your website analytics, social media metrics, and customer data to uncover key insights. This initial phase allows us to understand your audience, identify opportunities, and set measurable goals. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/allimg/Precision Targeting.webp')} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        {/* <h4 className="text-uppercase m-b20">2013-14</h4> */}
                                        <h4 className="m-b20">Precision Targeting</h4>
                                        <p className='whytargefy'>Using advanced data analytics tools, we segment your audience to ensure that your marketing efforts are precisely targeted. By understanding the demographics, behaviors, and preferences of your potential customers, we create tailored campaigns that resonate and drive engagement. This precision targeting maximizes your return on investment (ROI) and ensures that your message reaches the right people at the right time.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/allimg/Continous Monitoring.webp')} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        {/* <h4 className="text-uppercase m-b20">2015-16</h4> */}
                                        <h4 className="m-b20">Continuous Monitoring and Optimization</h4>
                                        <p className='whytargefy'>Our work doesn’t stop once a campaign is launched. We continuously monitor the performance of your campaigns in real-time. By tracking key performance indicators (KPIs) and analyzing the data, we can make informed adjustments to optimize results. This ongoing process of testing, learning, and refining ensures that your campaigns remain effective and yield the best possible outcomes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/allimg/Predictive Analytics.webp')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        {/* <h4 className="text-uppercase m-b20">2017-18</h4> */}
                                        <h4 className="m-b20">Predictive Analytics</h4>
                                        <p className='whytargefy'>At Targefy, we utilize predictive analytics to stay ahead of trends and anticipate market changes. By analyzing historical data and identifying patterns, we can predict future behaviors and trends. This foresight allows us to proactively adjust your strategies, keeping your brand competitive and relevant in a rapidly evolving digital landscape. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/allimg/Comprehensive Reporting.webp')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        {/* <h4 className="text-uppercase m-b20">2011-12</h4> */}
                                        <h4 className="m-b20">Comprehensive Reporting</h4>
                                        <p className='whytargefy'>Transparency is at the core of our data-driven approach. We provide detailed reports that clearly communicate the performance of your campaigns. These reports include actionable insights and recommendations, helping you understand the impact of our efforts and the value we bring to your business. Our clear and comprehensive reporting ensures that you are always informed and in control. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/allimg/Custom Solutions.webp')} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        {/* <h4 className="text-uppercase m-b20">2013-14</h4> */}
                                        <h4 className="m-b20">Custom Solutions</h4>
                                        <p className='whytargefy'>No two businesses are alike, and neither are our solutions. By leveraging data, we create customized strategies that align with your specific goals and challenges. Whether you need to increase website traffic, boost social media engagement, or drive sales, our data-driven approach ensures that our strategies are tailored to meet your unique needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/allimg/Technology and Tools.webp')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        {/* <h4 className="text-uppercase m-b20">2011-12</h4> */}
                                        <h4 className="m-b20">Technology and Tools</h4>
                                        <p className='whytargefy'>We invest in the latest technology and tools to support our data-driven approach. From advanced analytics platforms to cutting-edge marketing software, our tech stack enables us to gather, analyze, and act on data effectively. This technological edge allows us to deliver superior results and maintain a competitive advantage. </p>
                                    </div>
                                    {/* <div className="tp-caption tp-resizeme" id="slide-902-layer-6" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['90','90','90','130']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000;&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000;&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 100, textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
   <div className="d-flex justify-content-center align-items-center" style={{marginTop:'20px'}} >
    <div className="col-md-12 col-sm-6 text-center">
        <h4 style={{ color: 'white' }}>Take the Next Step with Targefy</h4>
        <NavLink to="/contactus" className="site-button btn-effect">Contact Us</NavLink>
    </div>
</div>

{/* </div>  */}
                                </div>
                               
                              
                              
                               
                            </div>
                            <div className="row">
                                {/* <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic4.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div> */}
                                 <div className="col-md-12 col-sm-6">
                                    {/* <div className="mt-box our-story-detail bg-moving "  style={{ backgroundImage: 'url(' + img2 + ')' }}> */}
                                        {/* <h4 className="text-uppercase m-b20">2011-12</h4> */}
                                     
                                        {/* <div className="tp-caption tp-resizeme" id="slide-902-layer-6" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['90','90','90','130']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000;&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000;&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 100, textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <h4 style={{color:'white'}}>Take the Next Step with Targefy </h4>
    <NavLink to="/contactus" className="site-button btn-effect">Contact Us</NavLink>
</div>  */}
                                        {/* <p className='whytargefy'>We invest in the latest technology and tools to support our data-driven approach. From advanced analytics platforms to cutting-edge marketing software, our tech stack enables us to gather, analyze, and act on data effectively. This technological edge allows us to deliver superior results and maintain a competitive advantage. </p> */}
                                    {/* </div> */}
                                    
                                </div>
                               
                              
                              
                               
                            </div>
                            
                         
                            
                        </div>
                    </div>
                    
                </div>
                
            </>
        );
    }
};

export default OurStory;