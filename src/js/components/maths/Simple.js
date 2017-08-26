import React from 'react';
import BreadCrumbNav from '../BreadCrumbNav';
import { browserHistory } from 'react-router';
import Expression from './Expression';
import InputQuestion from './InputQuestion';

export default class Simple extends React.Component {

  constructor() {
    super();
    this.cancelEdit = this.cancelEdit.bind(this);
    this.check = this.check.bind(this);
    this.crumbs=[{
      key : 'Simple Maths'
    }];
  }

  cancelEdit(e) {
    e.preventDefault();
    browserHistory.push('/main/organizations/'+this.props.params.orgName+'/overview'); 
  }

  check(e){
    e.preventDefault();
    for(let i=0;i<10;i++){
      this.refs["ex"+i].setState({"iconShow":true});
    }
  }

  render() {
    let inputQuestionArr = [];
    for(let i=0;i<10;i++){
      inputQuestionArr.push(
              <div key={'outerDiv'+i}>
                <div className="form-group">
                  <InputQuestion id={'ex'+i} nameKey={'ex'+i} ref={'ex'+i} range={10}/>
                </div>
                <hr/>
              </div>
            );
    }

    return ( 
      <div>
        <BreadCrumbNav crumbs = {this.crumbs}/>
        <div className="row">
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="card-title">Plese calculate the result of the following questions.</h3>
              </div>
              <div className="panel-body">
                <form className="form-horizontal">
                  {inputQuestionArr}
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="panel panel-default">
              <div className='panel-body'>
                <p>Check the result!</p>
                <button type="button" className="btn btn-success btn-block" onClick = {this.check}>Check</button>
              </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}