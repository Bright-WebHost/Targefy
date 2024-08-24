import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About4 from './../Elements/About4';
import Specialization4 from './../Elements/Specialization4';
import Team3 from './../Elements/Team3';
import AboutSummary from './../Elements/AboutSummary';
import OurValue3 from '../Elements/OurValue3';
import Whatsapp from '../Common/Whatsapp';
import BlogComments from '../Elements/BlogComments';

var bnrimg = require('./../../images/allimg/Aboutb.webp');

class About extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="About Us " pagename="About Us" bgimage={bnrimg}/>
                    <About4 />
                    {/* <Whatsapp/> */}
                    <Specialization4 />
                    {/* <OurValue3/> */}
                    {/* <Team3 /> */}
                    {/* <AboutSummary /> */}
                    <BlogComments/>
                   
                </div>

                <Footer />

            </>
        );
    };
};

export default About;