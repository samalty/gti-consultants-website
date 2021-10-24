import React, { Component } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import './styles/Calculator.scss';

class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            calcDisplay: false,
            SME: true,
            visible: false,
            // SME R&D calculator
            expenditureSME: 125000,
            SMERelief: 0,
            // RDEC calculator
            expenditureRDEC: 500000,
            RDECRelief: 0
        }
    }
    displayCalculator = () => {
        this.setState({ calcDisplay: true });
    }
    toggleSME = () => {
        if (this.state.SME === false) { this.setState({ SME: true }); }
        this.setState({ visible: false });
    }
    toggleLC = () => {
        if (this.state.SME === true) { this.setState({ SME: false }); }
        this.setState({ visible: false });
    }
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: parseInt(event.target.value, 10) });
    }
    handleExpenditureSME = (event) => {
        this.setState({ expenditureSME: event.target.value });
    }
    handleExpenditureRDEC = (event) => {
        this.setState({ expenditureRDEC: event.target.value });
    }
    handleSMECalculation = (event) => {
        event.preventDefault();
        if (isNaN(this.state.expenditureSME)) {
            alert('Please ensure you have entered a valid sum for your R&D expenditure.')
        } else {
            this.setState({ 
                visible: true,
                SMERelief: this.state.expenditureSME * .3335
            });
        }
    }
    handleRDECCalculation = (event) => {
        event.preventDefault();
        if (isNaN(this.state.expenditureRDEC)) {
            alert('Please ensure you have entered a valid sum for your R&D expenditure.');
        } else {
            this.setState({
                visible: true,
                RDECRelief: this.state.expenditureRDEC * .13,
            });
        }
    }
    formatOutput(n) {
        return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    render() {
        return (
            <div className="calc-container">
                <div className="calc-intro">
                    <h2>R&D Tax Calculator</h2><i class="fas fa-calculator"></i>
                    <p>Try out our calculator to estimate the Corporation Tax savings that your company could make from a successful R&D Tax Relief claim.</p>
                </div>
                <button onClick={this.displayCalculator} className={ this.state.calcDisplay ? "invisible" : "intro-btn" }><span>Get started</span></button>
                <div className={ this.state.calcDisplay ? "calculator" : "invisible" }>
                    <p>Does your company qualify as an SME or a large company?</p>
                    <Tabs className="tabs">
                    <TabList className="tablist">
                        <Tab className={ this.state.SME ? "active-tab" : "inactive-tab" }
                            onClick={this.toggleSME}>SME</Tab>
                        <Tab className={ this.state.SME ? "inactive-tab" : "active-tab" }
                            onClick={this.toggleLC}>Large company</Tab>
                    </TabList>
                    <TabPanel className="tab-panel">
                        <form className="calculator-form" onSubmit={this.handleSMECalculation}>
                            <p>Please enter the amount your company spent on R&D in its last accounting period.</p>
                            <div className="range-container">
                                <p>R&D expenditure £ <input type="text" 
                                                                name="expenditureSME"
                                                                value={this.formatOutput(this.state.expenditureSME)}
                                                                onChange={this.handleInputChange}></input></p>
                                <input type="range"
                                    className="slider"
                                    min={0} 
                                    max={250000}
                                    step={5000}
                                    value={this.state.expenditureSME }
                                    onChange={this.handleExpenditureSME} />
                            </div>
                            <br></br>
                            <button type="submit">Calculate R&D Tax Relief</button>
                        </form>
                        <div className={ this.state.visible ? "calculation" : "invisible" }>
                            <p>You could claim a total tax saving of up to:</p>
                            <p className="result"><b>£{this.formatOutput(this.state.SMERelief.toFixed(2))}</b></p>
                            <p><b>Please note:</b> This R&D Tax Relief calculator provides an estimate of the Corporation Tax savings that your company 
                                may be entitled to, based on your estimated figures. Accurate figures are calculated by our experts upon receipt of your
                                expenditure details.</p>
                        </div>
                    </TabPanel>
                    <TabPanel className="tab-panel">
                        <form className="calculator-form" onSubmit={this.handleRDECCalculation}>
                            <p>Please enter the amount your company spent on R&D in its last accounting period.</p>
                            <div className="range-container">
                                <p>R&D expenditure £ <input type="text" 
                                                                name="expenditureRDEC"
                                                                value={this.formatOutput(this.state.expenditureRDEC)}
                                                                onChange={this.handleInputChange}></input></p>
                                <input type="range"
                                    className="slider"
                                    min={0} 
                                    max={1000000}
                                    step={25000}
                                    value={this.state.expenditureRDEC }
                                    onChange={this.handleExpenditureRDEC} />
                            </div>
                            <br></br>
                            <button type="submit">Calculate R&D Tax Relief</button>
                        </form>
                        <div className={ this.state.visible ? "calculation" : "invisible" }>
                            <p>You could claim a total tax saving of up to:</p>
                            <p className="result"><b>£{this.formatOutput(this.state.RDECRelief.toFixed(2))}</b></p>
                            <p><b>Please note:</b> This R&D Tax Relief calculator provides an estimate of the Corporation Tax savings that your company 
                                may be entitled to, based on your estimated figures. Accurate figures are calculated by our experts upon receipt of your
                                expenditure details.</p>
                        </div>
                    </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Calculator;