import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: 'Our Story',
        title: `Our Story`,
        icon: require('./../../images/allicons/script.png'),
        description: 'Targefy was founded with a vision to revolutionize the digital marketing landscape. We recognized the growing need for businesses to not just have an online presence, but to thrive in a competitive digital world. With a team of seasoned professionals, we set out to create a full-service agency that combines cutting-edge technology with deep industry knowledge.',
    },
    {
        count: 'Our Mission',
        title: 'Our Mission',
        icon: require('./../../images/allimg/Mission.png'),
        description: 'Our mission is simple: to provide top-notch digital marketing solutions that drive results. We believe in the power of data to guide our decisions, creativity to differentiate our campaigns, and dedication to ensure our clients success. At Targefy, we are committed to delivering personalized strategies that align with your unique goals and challenges.',
    },
    {
        count: 'Our Vision',
        title: 'Our Vision',
        icon: require('./../../images/allimg/Vision.png'),
        description: 'Our vision is to become the leading digital marketing agency known for transforming brands through data-driven insights and innovative solutions. We aim to set new benchmarks in the industry by continuously evolving and adapting to the dynamic digital landscape, ensuring our clients always stay ahead of the curve.',
    }
]

var img1 = require('./../../images/background/ptn-1.png');

class Specialization4 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-tb80 bg-white bg-repeat square_shape2 inner-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        {/* <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Speciallization</h2>
                                </div>
                            </div>
                        </div> */}
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                    {services.map((item, index) => (
                                        <div className="col-md-4 col-sm-6" key={index} >
                                            <div className="mt-icon-box-wraper m-b30" >
                                                <div className="relative icon-count-2 bg-gray p-a30 p-tb50" style={{height:"400px"}}>
                                                    <span className="icon-count-number" style={{fontSize:'40px',color:'#bb0000'}}>{item.count}</span>
                                                    <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                        <span className="icon-cell" ><img src={item.icon} alt=""/></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        {/* <h4 className="mt-tilte m-b25">{item.title}</h4> */}
                                                        <p style={{textAlign:'justify',textJustify:"inter-word"}}>{item.description}</p>
                                                        {/* <NavLink to={"/services"} className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Specialization4;