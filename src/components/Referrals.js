import React, { Component } from 'react';
import './styles/Referrals.scss';
import Navbar from './navbar';
import Footer from './footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

class Referrals extends Component {
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
                    <h1>R&D referral programme</h1>
                </div>
                <div className="referrals-intro-container">
                    <div className="referrals-overlay">
                        <div className="referrals-intro">
                            <h3>We give accountants the insight and assistance needed to offer valuable R&D services. Referring a 
                                client to us maximises the potential of their R&D activity while providing you with expertise 
                                underpinning your own added-value service.</h3>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="referrals-text">
                    <h2 className="referrals-header">Why partner with GTIC?</h2>
                    <div className="advantages-container">
                        <div className="advantages" data-aos="zoom-in">
                            <i className="fas fa-handshake"></i>
                            <hr></hr>
                            <p>A dedicated relationship manager to keep you informed of each step of your referee’s R&D claim.</p>
                        </div>
                        <div className="advantages" data-aos="zoom-in" data-aos-delay="250">
                            <i className="fas fa-chart-line"></i>
                            <hr></hr>
                            <p>See your referee reap the rewards of a synchronised approach to accounting and innovation funding.</p>
                        </div>
                        <div className="advantages" data-aos="zoom-in" data-aos-delay="500">
                            <i className="fas fa-pound-sign"></i>
                            <hr></hr>
                            <p>Tangible business benefits and a significant financial incentive for both you and your clients.</p>
                        </div>
                    </div>
                </div>
                <div className="referral-process-container">
                    <h2 className="referrals-header">How it works</h2>
                    <div className="link one-two" data-aos="fade-in" data-aos-delay="1000"></div>
                    <div className="link two-three" data-aos="fade-in" data-aos-delay="1000"></div>
                    <div className="link three-four" data-aos="fade-in" data-aos-delay="1000"></div>
                    <div className="link four-five" data-aos="fade-in" data-aos-delay="1000"></div>
                    <div className="step one" data-aos="flip-up">
                        <div className="step-title">
                            <h3>1. Getting acquainted</h3>
                        </div>
                        <p>From the offset, our specialist advisors will set aside time to share specialist expertise, understand the needs of you and your referee, 
                            and hopefully establish a long and fruitful partnership.</p>
                        <p>Joining your referee at one of our R&D Tax Relief workshops can help enhance your relationship while improving your understanding 
                            of your client’s business. It also shares greater insight into the incentive, as well as further information that can add value 
                            to your wider network.</p>
                    </div>
                    <i className="material-icons md-60">double_arrow</i>
                    <div className="step two" data-aos="flip-up">
                        <div className="step-title">
                            <h3>2. Compiling an R&D claim</h3>
                        </div>
                        <p>Following the introduction, we apply an established process to understand your referee’s business and their R&D activity. Pending your 
                            referee’s approval, we ask you to remain a key point of contact for financial matters. The resulting insight informs a maximum-value 
                            R&D claim that compliments your existing engagement.</p>
                    </div>
                    <i className="material-icons md-60">double_arrow</i>
                    <div className="step three" data-aos="flip-up">
                        <div className="step-title">
                            <h3>3. Keeping you informed</h3>
                        </div>
                        <p>We provide you with a point of contact to keep you informed throughout every step of the claims process. This involves regular 
                            scheduled catchups to update you on how our services are benefitting your referee’s, and to ensure that you are receiving 
                            maximum value from your partnership with GTIC.</p>
                    </div>
                    <i className="material-icons md-60">double_arrow</i>
                    <div className="step four" data-aos="flip-up">
                        <div className="step-title">
                            <h3>4. Continued professional development</h3>
                        </div>
                        <p>Our referral programme is designed to empower you to help your clients identify R&D Tax Relief opportunities, while keeping you 
                            informed of any relevant legislative changes. The provision of specialist training for your organisation, in addition to 
                            assistance with new prospects and incentives advice on request, ensures we keep this promise. You can also attend workshops 
                            and access relevant educational materials to further aid your understanding.</p>
                    </div>
                    <i className="material-icons md-60">double_arrow</i>
                    <div className="step five" data-aos="flip-up">
                        <div className="step-title">
                            <h3>5. Rewarding your efforts</h3>
                        </div>
                        <p>Whereas your client stands to receive a potentially game-changing source of funding, you also benefit financially as we share 
                            a portion of our fee as an acknowledgement of your time and effort. This puts the finishing touch on a mutually beneficial 
                            relationship for all involved.</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Referrals;