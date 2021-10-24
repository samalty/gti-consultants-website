import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.scss';
import logo from './media/logo-small.png';
import icon from './media/icon.png';
import NavbarData from './data/NavbarData';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="logo-container">
                    <img src={logo} alt="GTIC" className="footer-logo logo"></img>
                    <img src={icon} alt="GTIC" className="footer-logo icon"></img>
                </div>
                <div className="links">
                    <ul>
                        {NavbarData.filter(NavbarData => NavbarData.title).map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.path} className="footer-link">{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;