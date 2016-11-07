import React from 'react';
import BreadCrumbNav from './BreadCrumbNav';
import { browserHistory } from 'react-router';

export default class OrgList extends React.Component {

constructor () {
    super();
    this.crumbs=[{
      key : 'Organization List'
    }];
    this.state = {orgList:[]};
    this.selectOrg = this.selectOrg.bind(this);
  }

  selectOrg(index) {
    browserHistory.push('/main/organizations/'+this.state.orgList[index].name); 
  }

	render() {
		return ( <div>
				<BreadCrumbNav crumbs = {this.crumbs}/>
				<div className='card card-block'>
					<h4 className='card-title'> Organization List </h4>
				</div>

				<div className = "card-text">
					<div className="list-group">
					<a href="#" className="list-group-item list-group-item-action" onClick = {this.selectOrg}>Cras justo odio</a>
					<a href="#" className="list-group-item list-group-item-action" onClick = {this.selectOrg}>Dapibus ac facilisis in</a>
					<a href="#" className="list-group-item list-group-item-action" onClick = {this.selectOrg}>Morbi leo risus</a>
					<a href="#" className="list-group-item list-group-item-action" onClick = {this.selectOrg}>Porta ac consectetur ac</a>
					<a href="#" className="list-group-item list-group-item-action" onClick = {this.selectOrg}>Vestibulum at eros</a>
					</div>
				</div>
			</div>
		);
	}
}
