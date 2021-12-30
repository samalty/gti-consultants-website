import React from 'react';
import './styles/_Themes.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AllArticlesTemplate = ({children}) => {
    return (
        <div className="background">
            <Navbar />
            <div className="layout-body">
                <div>{children}</div>
            </div>
            <Footer />
        </div>
    )
}

export default AllArticlesTemplate;