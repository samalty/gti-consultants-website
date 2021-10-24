import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Opportunities.scss';
import { OpportunitiesData } from './data/OpportunitiesData';

function Accordion() {
    const [items, setItems] = useState(OpportunitiesData);
    const toggleAccordion = index => {
        setItems(items.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }
            return item;
        }))
    }
    return (
        <div>
            {OpportunitiesData.map((item, index) => {
                return (
                    <div className={"accordion" + (item.open ? ' open': '')} 
                         key={index}
                         onClick={() => toggleAccordion(index)}>
                        <div className="incentive-title">
                            <h3>{item.title}</h3><h3 className="expand-icon">{(item.open ? '-':'+')}</h3>
                        </div>
                        <div className="incentive-info">
                            <i className={item.icon}></i>
                            <br></br>
                            <br></br>
                            <p className="accordion-desc">{item.description1}</p>
                            <p className="accordion-desc">{item.description2}</p>
                            <Link to={item.path}>
                                <button className="find-out-accordion">Find out more</button>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Accordion;