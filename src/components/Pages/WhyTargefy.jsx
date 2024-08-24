import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About4 from './../Elements/About4';
import Specialization4 from './../Elements/Specialization4';
import Team3 from './../Elements/Team3';
import AboutSummary from './../Elements/AboutSummary';
import OurValue3 from '../Elements/OurValue3';
import OurStory from '../Elements/OurStory';
import AboutCompany from '../Elements/AboutCompany';

var bnrimg = require('./../../images/allimg/Whytargefy.webp');

class WhyTargefy extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="Why Targefy" pagename="About Us" bgimage={bnrimg}/>
                    <AboutCompany/>
                    <OurStory/>

                </div>

                <Footer />

            </>
        );
    };
};

export default WhyTargefy;