import React from 'react';

export default class Header extends React.Component {
	 render() {return (
      <nav className="navbar navbar-static-top navbar-dark bg-inverse">
        <a className="navbar-brand" href="#">Project name</a>
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
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