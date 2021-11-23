import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Opportunities from './components/Opportunities';
import Claims from './components/Claims';
import Referrals from './components/Referrals';
import Explained from './components/Explained';
import Insights from './content/Insights';
import Accounting from './content/Accounting';
import Post from './content/Post';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/opportunities" component={Opportunities} />
        <Route exact path="/making_a_claim" component={Claims} />
        <Route exact path="/referrals" component={Referrals} />
        <Route exact path="/r&d_explained" component={Explained} />
        <Route exact path="/insights" component={Insights} />
        <Route exact path="/insights/Accounting" component={Accounting} />
        <Route exact path="/insights/:category/:id" render={props => <Post {...props} />} />
        <Route exact path="/contact" component={Contact} />
      </div>
    )
  }
}

export default App;