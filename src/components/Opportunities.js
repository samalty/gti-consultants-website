import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Opportunities.scss';
import Navbar from './Navbar';
import Accordion from './Accordion';
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { OpportunitiesData } from './data/OpportunitiesData';

class Opportunities extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
        Aos.init({
            duration: 1000
        });
    }
    render() {
        return (
            <div className="background">
                <Navbar />
                <div className="header-container">
                    <h1>Never miss an opportunity</h1>
                </div>
                <div className="opportunities-intro-container">
                    <div className="opportunities-overlay">
                        <div className="opportunities-intro">
                            <h3>Our goal is to reward companies of all sectors, sizes and structures for the pioneering work that they 
                                undertake. Achieving this requires specialist knowledge of a broad range of incentives that few other 
                                consultancies possess.</h3>
                        </div>
                    </div>
                </div>
                <div className="incentives-browser">
                    {OpportunitiesData.map((item, index) => {
                        return (
                            <div key={index}>
                                <h2>{item.title}</h2>
                                <i className={item.icon}></i>
                                <br></br>
                                <br></br>
                                <hr></hr>
                                <p>{item.description1}</p>
                                <p>{item.description2}</p>
                                <Link to={item.path}>
                                    <button className="find-out">Find out more</button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className="incentives-mobile">
                    <Accordion />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Opportunities;