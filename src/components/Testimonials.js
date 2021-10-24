import React, { Component } from 'react';
import './styles/Testimonials.scss';
import { TestimonialsData } from './data/TestimonialsData';

class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0
        }
    }
    handleLeft = (e) => {
        if (this.state.x === 0) {
            this.setState({ x: -100 * (TestimonialsData.length-1) })
        } else this.setState({ x: this.state.x + 100 })
    };
    handleRight = (e) => {
        if (this.state.x === -100 * (TestimonialsData.length-1)) {
            this.setState({ x: 0 })
        } else this.setState({ x: this.state.x - 100 })
    };
    render() {
        return(
            <div className="carousel-container">
                <div className="carousel">
                    {TestimonialsData.map((item, index) => {
                        return (
                            <div className="card" key={index} style={{transform:`translateX(${this.state.x}%)`}}>
                                <div className="inner-card">
                                    <i className="fas fa-quote-right"></i>
                                    <p className="testimonial-text"><i>{item.testimonial}</i></p>
                                    <p className="source-text">{item.source}</p>
                                </div>
                            </div>
                        )
                    })}
                    <button className="carousel-btn left" onClick={this.handleLeft}><span></span></button>
                    <button className="carousel-btn right" onClick={this.handleRight}><span></span></button>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.x === -100 * (TestimonialsData.length-1)) {
                this.setState({ x: 0 })
            } else this.setState({ x: this.state.x - 100 })
        }, 6000)
    }
}

export default Testimonials;