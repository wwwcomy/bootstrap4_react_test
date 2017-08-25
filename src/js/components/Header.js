import React from 'react';
import { Router, Route, browserHistory,Link} from 'react-router'

export default class Header extends React.Component {
	 render() {return (
      <nav className="navbar navbar-inverse">
        <Link className="navbar-brand" to="/main">Project name</Link>
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/main">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </nav>);
	 }
}