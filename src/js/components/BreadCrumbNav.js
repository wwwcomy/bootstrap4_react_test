import React from 'react';
import { browserHistory } from 'react-router';

export default class BreadCrumbNav extends React.Component {
  constructor() {
    super();
    this.onCrumbClick = this.onCrumbClick.bind(this);
  }

  onCrumbClick(href, e) {
    browserHistory.push(href);
  }

  render () {
    let crumbs = this.props.crumbs;
    let anchors = [];
    if(crumbs!=undefined){
    crumbs.map((crumb) => {
      if(crumb.href) {
        anchors.push(
              <li key={crumb.key} className="breadcrumb-item">
                  <a href="#" onClick={this.onCrumbClick.bind(this, crumb.href)}> {crumb.key} </a>
              </li>
            );
      } else {
        anchors.push(
                <li key={crumb.key} className="breadcrumb-item">
                     {crumb.key}
                </li>
               );
      }
    });
  }
    return (<div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="#" onClick={this.onCrumbClick.bind(this, "/main")}>Home</a></li>
        {anchors}
      </ol>
    </div>);
  }
}
