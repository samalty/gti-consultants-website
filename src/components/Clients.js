import React, { Component } from 'react';
import './styles/Clients.scss';
import { PartnersData } from './data/PartnersData';

class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0
        }
    }
    handleRight = (e) => {
        if (this.state.x === -100 * (PartnersData.length-1)) {
            this.setState({ x: 0 })
        } else this.setState({ x: this.state.x - 100 })
    };
    render() {
        return(
            <div className="partner-carousel-container">
                <div className="partner-carousel">
                    {PartnersData.map((item, index) => {
                        return (
                            <div className="card" key={index} style={{transform:`translateX(${this.state.x}%)`}}>
                                <div className="inner-card">
                                    <img src={item.img} className={item.style} alt="" data-aos="zoom-in"></img>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.x === -100 * (PartnersData.length-1)) {
                this.setState({ x: 0 })
            } else this.setState({ x: this.state.x - 100 })
        }, 3000)
    }
}

export default Clients;