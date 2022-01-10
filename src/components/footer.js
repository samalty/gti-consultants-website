import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.scss';
import logo from './media/logo-small.png';
import NavbarData from './data/NavbarData';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
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
                <img src={logo} alt="GTIC" className="footer-logo"></img>
            </div>
        )
    }
}

export default Footer;