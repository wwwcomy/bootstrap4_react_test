import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Topic from './components/Topic';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.btnClick = this.btnClick.bind(this);
  }
  btnClick() {
    let stateCount = this.state.count;
    this.setState({
      count: ++stateCount
    });
  }
  render() {
    return <Router>
    <div>
      <Header />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topic">Topic</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Main}/>
      <Route path="/about" component={About}/>
      <Route path="/topic" component={Topic}/>
      <Footer />
    </div>
  </Router>
  }
}