import React from 'react';
import {Link} from 'react-router-dom'

export default class Header extends React.Component {
	 render() {return (
      <nav className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="nav-link" to="/main">Project Name</Link>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><Link className="nav-link" to="/main">Home</Link></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>);
	 }
}