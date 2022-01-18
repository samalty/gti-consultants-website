import React, { Component } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import './styles/Home.scss';
import Navbar from './Navbar';
import Clients from './Clients';
import Testimonials from './Testimonials';
import { HomeData } from './data/HomeData';
import Footer from './Footer';
import logo from './media/icon.png';
import logoLong from './media/logo-long.png';
import marginGreen from './media/margin-green.png';
import marginGrey from './media/margin-grey.png';


class Home extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
        Aos.init({
            duration: 2000
        });
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="background-image">
                    <div className="banner-header">
                        <div className="header-overlay">
                            <div className="banner-text">
                                <img src={logo} alt="GITC" className="logo-header-sml"></img>
                                <h1 className="logo-header-sml-text">GTI Consultants</h1>
                                <h1 className="logo-header-med-text">GT Incentive Consultants</h1>
                                <img src={logoLong} alt="GITC" className="logo-header-lrg"></img>
                                <h1 className="tagline">Attentive, accessible, affordable tax incentive consultancy.</h1>
                                <h3 className="intro-text">We provide pioneering UK companies with optimised, tailored guidance, helping them 
                                    to supplement growth and innovation by leveraging government support for their work.</h3>
                                <br></br>
                                <Link to="/contact">
                                    <button className="btn">BOOK A FREE CONSULTATION</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-container">
                    {HomeData.map((item, index) => {
                        return (
                            <div className="intro-background" key={index}>
                                <div className="intro-container">
                                    <img src={marginGreen} alt="green" className="margin-green green-1" data-aos="flip-right"></img>
                                    <img src={marginGreen} alt="green" className="margin-green green-2" data-aos="flip-right"></img>
                                    <img src={marginGrey} alt="grey" className="margin-grey grey-1" data-aos="flip-right"></img>
                                    <img src={marginGrey} alt="grey" className="margin-grey grey-2" data-aos="flip-right"></img>
                                    <div className="link-container" data-aos="fade-up">
                                        <div className="text-box">
                                            <h2>{item.title}</h2>
                                            <hr></hr>
                                            <h3>{item.description}</h3>
                                            <Link to={item.path} className="intro-link">
                                                <button className="intro-btn"><span>{item.buttonText}</span></button>
                                            </Link>
                                        </div>
                                        <div className="decoration"></div>
                                        <div className="image-container bottom-right">
                                            <img src={item.img} alt={item.buttonText} className="intro-img"></img>
                                            <Link to={item.path} className="intro-link-mobile">
                                                <div className="intro-img-background" style={{backgroundImage: `url(${item.img})`}}>
                                                    <div className="intro-img-overlay" data-aos="zoom-out">
                                                        <h2>{item.title}</h2>
                                                        <hr></hr>
                                                        <h3>{item.description}</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        <Link to={item.path} className="intro-link-mobile">
                                            <button className="intro-btn-mobile"><span>{item.buttonText}</span></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="clients">
                    <div className="clients-container">
                        <h2>Trusted by</h2>
                        <Clients />
                    </div>
                </div>
                <div className="testimonials">
                    <div className="overlay">
                        <div className="testimonials-container">
                            <div className="testimonials-text">
                                <h2>Testimonials</h2>
                                <Testimonials />
                            </div>
                            <Link to="/contact" className="contact-link">
                                <button className="consultation">BOOK A FREE CONSULTATION</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;