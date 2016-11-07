import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class BreadCrumbNav extends Component {
  constructor() {
    super();
    this.onCrumbClick = this.onCrumbClick.bind(this);
  }

  onCrumbClick(href) {
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
                  <a onClick={this.onCrumbClick.bind(this, crumb.href)}> {crumb.key} </a>
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
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">test1</a></li>
        <li className="breadcrumb-item active">test2</li>
        {anchors}
      </ol>
    </div>);
  }
}
