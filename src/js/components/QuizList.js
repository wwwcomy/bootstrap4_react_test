import React from 'react';
import BreadCrumbNav from './BreadCrumbNav';
import { browserHistory } from 'react-router';

export default class QuizList extends React.Component {

  constructor () {
    super();
    this.crumbs=[{
      key : 'Examination Paper'
    }];
    this.state = {paperList:[]};
    this.selectPaper = this.selectPaper.bind(this);
  }
  componentDidMount() {
  }

  selectPaper(e) {
    e.preventDefault();
    browserHistory.push('main/maths/'+e.currentTarget.name); 
  }

  render() {
    return ( <div>
        <BreadCrumbNav crumbs = {this.crumbs}/>
        <div className='card card-block'>
          <h4 className='card-title'> Examination List </h4>
        </div>

        <div className = "card-text">
          <div className="list-group">
          <a href="maths/simple" name="simple" className="list-group-item list-group-item-action" onClick = {this.selectPaper}>Simple Maths</a>
          <a href="maths/simple2" name="simple2" className="list-group-item list-group-item-action" onClick = {this.selectPaper}>Simple Maths</a>
          <a href="#" className="list-group-item list-group-item-action" onClick = {this.selectPaper}>Morbi leo risus</a>
          <a href="#" className="list-group-item list-group-item-action" onClick = {this.selectPaper}>Porta ac consectetur ac</a>
          <a href="#" className="list-group-item list-group-item-action" onClick = {this.selectPaper}>Vestibulum at eros</a>
          </div>
        </div>
      </div>
    );
  }
}
