import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss';
import logo from './media/logo-small.png';
import { NavbarData } from './data/NavbarData';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    window.addEventListener('scroll', () => {
        const element = document.getElementById("nav");
        const button = document.getElementById("scrollTop");
        if (window.scrollY > 50) {
            element.classList.add('scrolled');
        } //else element.classList.remove('scrolled');
        if (window.pageYOffset > 1000) {
            button.classList.add('visible');
        } //else button.classList.remove('visible');
    });
    const scrollTop = () => {
        window.scrollTo({ top: 0, scrollBehaviour: 'smooth' });
    }
    return (
        <div>
            <div className="contact-banner">
                <p className="email"><i className="fas fa-envelope"></i> hello@govtaxincentives.com</p><p><i className="fas fa-phone"></i> 020 3582 5526</p>
            </div>
            <div className="navbar" id="nav">
                <Link to="/">
                    <img src={logo} alt="GTIC" className="navbar-logo"></img>
                </Link>
                <Link to="#" className="menu-bars">
                    <i className="fas fa-bars" onClick={showSidebar}></i>
                </Link>
                <ul>
                    {NavbarData.filter(NavbarData => NavbarData.title !== 'HOME').map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path} className="navbar-link">{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <i className="fas fa-times"></i>
                        </Link>
                    </li>
                    {NavbarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        )
                    })}
                 </ul>
            </nav>
            <div className={sidebar ? 'nav-overlay active' : 'nav-overlay'}></div>
            <button id="scrollTop" className="scroll-top" onClick={scrollTop}>
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    )
}

export default Navbar;