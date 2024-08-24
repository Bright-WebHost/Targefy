import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';

var bgimage = require('./../../images/background/bg-site.png');

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = {logo: require('./../../images/allimg/footertargefy.webp')};
    }
    
    updateFooterLogo = (updatedlogo) => {this.currentstate.logo = updatedlogo;}

    render() {
        
        return (
            <>
                <footer className="site-footer footer-large  footer-dark	footer-wide">
                    <div className="container call-to-action-wrap bg-no-repeat bg-center" style={{ backgroundImage: 'url('+bgimage+')' }}>
                        <div className="p-a30 bg-primary ">
                            <div className="row">
                                <div className="col-md-8 col-sm-8">
                                    <div className="call-to-action-left text-black">
                                        <h4 className="text-uppercase m-b10 m-t0" style={{color:'white'}}>Get in Touch and Elevate Your Digital Presence Today!</h4>
                                        <span style={{color:'white'}}>Reach out  to enhance your digital presence and start your journey toward remarkable growth</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="call-to-action-right">
                                    <div className="tp-caption tp-resizeme" id="slide-902-layer-6" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['90','90','90','130']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000;&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000;&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 100, textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <NavLink to="/contactus" className="site-button btn-effect">Contact Us</NavLink>
</div>

                                        <div className="widget_newsletter">
                                            <div className="newsletter-bx">
                                                {/* <form role="search" action="./">
                                                    <div className="input-group">
                                                        <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                                        <span className="input-group-btn">
                                                            <button type="submit" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                                                        </span>
                                                    </div>
                                                </form> */}
                                                 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"/"}><img src={this.currentstate.logo} alt="" /></NavLink>
                                        </div>
                                        <p className="max-w400">We deliver data-driven strategies to enhance your brand's online presence and drive growth.</p>
                                        <ul className="social-icons mt-social-links">
    <li><a href={"https://www.facebook.com/people/Targefy/61563843562779/?mibextid=ZbWKwL"} className="fa-brands fa-facebook" target="_blank"/></li>
    <li><a href={"https://www.linkedin.com/company/targefy-digital-marketing-agency/"} className="fa-brands fa-linkedin"  target="_blank"/></li>
    <li><a href={"https://www.instagram.com/targefy.digital/?igsh=OW1laW54eWNpbjVx"} className="fa-brands fa-instagram" target="_blank"/></li>

   <li><a  href={"https://www.tiktok.com/@targefy.digital"} className="fa-brands fa-tiktok" target="_blank" />
  </li>
  <li>
    <a 
      href={"https://x.com/Targefy_digital"} 
      className="fa-brands fa-twitter" 
      target="_blank" 
      rel="noopener noreferrer"
    />
  </li>
  <li>
    <a 
      href={"https://www.youtube.com/@Targefy"} 
      className="fa-brands fa-youtube" 
      target="_blank" 
      rel="noopener noreferrer"
    />
  </li>
  <li><a href={"mailto:contact@targefy.com "} className="fa-solid fa-envelope" target="_blank"/></li>

    {/* <li><a href={"https://wa.me/0097 1552 013554"} className="fa fa-whatsapp" /></li> */}
</ul>

                                    </div>
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h4 className="widget-title">Contact Us</h4>
                                        <ul className="widget_address">
                                            <li>Business Centre,Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates</li>
                                            <ul>
                                            <li><a href="tel:+971545681182" style={{color:'#999999'}}>+971 545 681 182</a></li>
    <li ><a href="mailto:contact@targefy.com " style={{color:'#999999'}}>contact@targefy.com </a></li>
    {/* <li><a href="tel:++0097 1552 013554" style={{color:'#999999'}}>+0097 1552 013554</a></li> */}
</ul>

                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">Useful links</h4>
                                        <ul>
                                            <li><NavLink to={"/"}>Home</NavLink></li>
                                            <li><NavLink to={"/about"}>About</NavLink></li>
                                            <li><NavLink to={"/WhyTargefy"}>Why Targefy</NavLink></li>
                                            <li><NavLink to={"/services"}>Services</NavLink></li>
                                            <li><NavLink to={"/contactus"}>Contact Us</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">Map</h4>
                                        {/* <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3"> */}
                                    <div className="widget widget_services inline-links">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.534577972695!2d55.458348!3d25.319836699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f13315b54ef%3A0xb264908f8c4170c!2sTargefy%20FZC%20LLC!5e0!3m2!1sen!2sin!4v1722683012126!5m2!1sen!2sin" width="250" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                {/* </div> */}
                                    </div>
                                </div>
                                
                                {/* TAGS */}
                                {/* <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget recent-posts-entry-date">
                                        <h4 className="widget-title">Resent Post</h4>
                                        <div className="widget-post-bx">
                                            <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                                <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                                                    <strong className="p-date">24</strong>
                                                    <span className="p-month">Mar</span>
                                                    <span className="p-year">2022</span>
                                                </div>
                                                <div className="mt-post-info">
                                                    <div className="mt-post-header">
                                                        <h6 className="post-title"><NavLink to={"/post-sidebar"}>On these beams, we’re building dreams.</NavLink></h6>
                                                    </div>
                                                    <div className="mt-post-meta">
                                                        <ul>
                                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments" /> 28</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                                <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                                                    <strong className="p-date">30</strong>
                                                    <span className="p-month">Jan</span>
                                                    <span className="p-year">2022</span>
                                                </div>
                                                <div className="mt-post-info">
                                                    <div className="mt-post-header">
                                                        <h6 className="post-title"><NavLink to={"/post-sidebar"}>We’ll be a sensation for you next renovation</NavLink></h6>
                                                    </div>
                                                    <div className="mt-post-meta">
                                                        <ul>
                                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments" /> 29</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* NEWSLETTER */}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="mt-footer-bot-center">
                                    <span className="copyrights-text">© Copyright 2024 Targefy. All Rights Reserved</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)}/>

            </>
        );
    };
};

export default Footer;