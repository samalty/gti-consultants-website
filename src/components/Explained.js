import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Explained.scss';
import Navbar from './navbar';
import Calculator from './Calculator';
import Footer from './footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

class Explained extends Component {
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
                    <h1>R&D Tax Relief explained</h1>
                </div>
                <div className="explained-intro-container">
                    <div className="explained-overlay">
                        <div className="explained-intro">
                            <h3>A generous initiative rewarding innovation within UK industry, Research & Development (R&D) Tax Relief 
                                could provide your business with a competitive advantage and firm foundations for future growth.</h3>
                        </div>
                    </div>
                </div>
                <div className="explained-container">
                    <h2 data-aos="fade-right">What is R&D Tax Relief?</h2>
                    <p>R&D Tax Relief is a Government incentive designed to stimulate the economy by supplementing innovation. For 
                       companies with research and development at their core, this incentive generates valuable savings that can 
                       accelerate company growth and facilitate industry advancements.</p>
                    <h2 data-aos="fade-right">How does R&D Tax Relief work?</h2>
                    <p>R&D Tax Relief enables businesses investing in research and development to claim a Corporation Tax deduction 
                       or a tax credit on qualifying expenditure. The amount and type of relief available depends on the company size 
                       and whether it has made a profit or a loss in the tax year in question.</p>
                    <p>Below we detail company size criteria and the applicable forms of relief available:</p>
                    <p><b>SME</b></p>
                    <ul>
                        <li>Fewer than 500 staff; and</li>
                        <li>A turnover of under €100m or a balance sheet total below €86m</li>
                    </ul>
                    <p><b>Large company</b></p>
                    <ul>
                        <li>500 staff or more; or</li>
                        <li>A turnover of more than €100m and a balance sheet total above €86m</li>
                    </ul>
                    <table>
                        <tr>
                            <th></th>
                            <th>Profit-making</th>
                            <th>Loss-making</th>
                        </tr>
                        <tr>
                            <th>SME</th>
                            <td>230% deduction of qualifying R&D costs from annual profit</td>
                            <td>Tax credit of up to 14.5% of the surrenderable loss</td>
                        </tr>
                        <tr>
                            <th>Large company</th>
                            <td>Research and Development Expenditure Credit (RDEC) worth 13% of qualifying R&D costs</td>
                            <td>Research and Development Expenditure Credit (RDEC) worth 13% of qualifying R&D costs</td>
                        </tr>
                    </table>
                    <h2 data-aos="fade-right">What work is eligible for R&D Tax Relief?</h2>
                    <p>Providing your company is investing in innovation, you should be eligible for R&D Tax Relief. The scope for 
                       qualifying R&D activity is broad and spans all sectors. However, eligible projects must first meet certain 
                       qualifying criteria, broadly detailed below:</p>
                    <ul>
                        <li>The project is seeking to achieve a scientific or technological advancement</li>
                        <li>A scientific or technological uncertainty has been encountered during the project</li>
                        <li>Knowledge of how to overcome this uncertainty is not readily available</li>
                        <li>Investment has been undertaken to resolve this uncertainty</li>
                    </ul>
                    <p>The activity itself may entail modifications to an existing service or product, or the creation of something 
                       new altogether. The R&D undertaken can qualify for relief whether successful or not.</p>
                    <p>Retrospective claims can also be made, and those who have so far failed to capitalise on this generous 
                       initiative can still submit a claim for relief covering their previous two completed accounting periods.</p>
                    <h2 data-aos="fade-right">What expenditure qualifies for R&D Tax Relief?</h2>
                    <p>Having identified a project that is eligible for relief, various expenses can be offset against your Corporation 
                       Tax liability, the most prominent of which include:</p>
                    <ul>
                        <li>Portions of salaries, employer’s NIC and pension fund contributions for relevant staff</li>
                        <li>Materials and consumables used during the project, including water, fuel and power</li>
                        <li>Software used directly in the R&D activity</li>
                        <li>Design, construction and testing costs associated with developing prototypes</li>
                    </ul>
                    <h2 data-aos="fade-right">Why make an R&D Tax Relief claim?</h2>
                    <p>During the 2019-20 tax year, the estimated total amount of R&D tax relief support claimed was £7.4bn, comprised of 
                       76,225 claims by SMEs and 9,675 RDEC claims. This is a considerable sum which alone should warrant serious consideration 
                       for those yet to capitalise on this initiative. However, the true value of R&D Tax Relief lies in how these savings 
                       are reinvested.</p>
                    <p>Particularly for ambitious SMEs, the savings yielded can have a transformational impact, supplementing rapid growth 
                       and further innovation. Companies may decide to streamline production or even transform their service offering through 
                       investment in new equipment or use the savings to improve productivity via the onboarding of new staff.</p>
                    <p>Alternatively, the savings obtained could be pooled back into the company’s capital, an ideal remedy for start-ups 
                       with a product or service in the pipeline but limited funds to last until production. Ultimately, R&D Tax Relief 
                       enables companies to benefit in the manner that they see fit.</p>
                    <p>But while this initiative can deliver substantial value, compliance is key. Misrepresentation of company affairs for 
                       the purpose of an R&D Tax Relief claim can expose a company to penalties from HMRC, in addition to the retrospective 
                       retraction of the benefit and further punitive measures. This is one of many reasons why expert assistance is always 
                       advised.</p>
                </div>
                <div className="explained-cta">
                    <div className="explained-overlay">
                        <div className="cta-textbox">
                            <h2>How can GTIC help?</h2>
                            <p>With a wealth of expertise in R&D Tax Relief, and a 100% success rate when protecting clients against HMRC enquiries, 
                               we have the ideal combination of expertise and experience to deliver a maximum value, compliant claim. For a free 30-minute 
                               telephone consultation to gauge a project’s eligibility, and to find out more about how we can optimise your claim, 
                               get in touch by clicking the link below.</p>
                            <Link className="button-link" to="/contact">
                                <button className="consultation">BOOK A FREE CONSULTATION</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Calculator />
                <Footer />
            </div>
        )
    }
}

export default Explained;