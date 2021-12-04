import React, { Component } from 'react';
import './styles/About.scss';
import Navbar from './navbar';
import Footer from './footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import about from './media/about.jpg';

class About extends Component {
    componentDidMount() {
        Aos.init({
            duration: 1000
        });
    }
    render() {
        return (
            <div className="background">
                <Navbar />
                <div className="header-container">
                    <h1>Preparing your platform for innovation</h1>
                </div>
                <div className="about-intro-container">
                    <div className="about-overlay">
                        <div className="about-intro">
                            <h3>We provide expert advice to pioneering UK businesses, helping them to 
                                compliantly capitalise on available government grants and incentives. </h3>
                        </div>
                    </div>
                </div>
                <div className="about-text">
                    <p>Our exhaustive yet efficient approach means our clients never miss an available opportunity, while guaranteeing 
                       maximum value claims and minimal disruption to business practices.</p>
                    <p>We pride ourselves on our attentive, accessible service and tailor our delivery processes to your needs, 
                       ultimately ensuring a fully transparent experience and swift claim into which your input needn’t span beyond 
                       the bare essentials.</p>
                    <p>Our expertise rewards businesses for the ground-breaking work that they undertake by delivering substantial 
                       returns that can be reinvested in a manner that they see fit. In helping to expedite innovation and growth 
                       amongst businesses UK-wide, we ensure that the various grants and incentives that we assist with have the 
                       effect that government intended.</p>
                </div>
                <h2 className="subhead" data-aos="fade-right">Partnering with GTIC</h2>
                <div className="about-text">
                    <div data-aos="fade-left" className="img-container">
                        <img src={about} alt="Partnering with GTIC" className="about-img"></img>         
                    </div>
                    <p>We partner with emerging and established companies of all sizes that aspire to add something new to their industry. 
                       Specialising in the IT, engineering and manufacturing sectors, our team of experts has helped more than 250 
                       businesses secure various forms of valuable relief, providing a gateway to growth and further development.</p>
                    <p>Our combined experience covers a wealth of grants and incentives, including R&D Tax Relief and Patent Box, making 
                       us better placed than most to help businesses identify and make the most of relevant opportunities.</p>
                    <p>With former 'Big Four' consultants within our ranks, we deliver an elite service for an affordable price, making 
                       quality consultancy more widely accessible.</p>
                    <p>Both our efficiencies and our competitive prices are aided by the fact that we place technology at the core of our 
                       processes. We circumvent the labour associated with manual processes and the expense incurred through outsourcing 
                       that many consultancies are bound by, before passing these savings onto you via our modest fees.</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;