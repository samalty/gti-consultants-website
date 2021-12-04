import React, { Component } from 'react';
import './styles/_Themes.scss';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const CategoryTemplate = ({children}) => {
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

export default CategoryTemplate;