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
    this.hide = this.hide.bind(this);
    this.reGenerate = this.reGenerate.bind(this);
    this.crumbs=[{
      key : 'Simple Maths'
    }];
    this.state = {
      questionCount:0
    };
  }

  componentDidMount(){
    this.setState({questionCount:10});
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
  hide(e){
    e.preventDefault();
    for(let i=0;i<10;i++){
      this.refs["ex"+i].setState({"iconShow":false});
    }
  }
  reGenerate(e){
    e.preventDefault();
    this.setState({questionCount:0});
    setTimeout(function(){this.setState({questionCount:10})}.bind(this),100);
    // this.componentDidMount();
  }

  render() {
    let inputQuestionArr = [];
    for(let i=0;i<this.state.questionCount;i++){
      inputQuestionArr.push(
              <div key={'outerDiv'+i}>
                <div className="form-group">
                  <InputQuestion id={'ex'+i} nameKey={'ex'+i} ref={'ex'+i} rangeFrom={0} rangeTo={10}/>
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
                <h3 className="card-title">Please calculate the results of the following questions.</h3>
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
                <p>The range of the number is from 0 to 10.</p>
                <p>Check the result!</p>
                <button type="button" className="btn btn-success btn-block" onClick = {this.check}>Check</button>
                <button type="button" className="btn btn-info btn-block" onClick = {this.hide}>Hide Mark</button>
                <button type="button" className="btn btn-danger btn-block" onClick = {this.reGenerate}>Re-Generate Questions</button>
              </div>
            </div>
          </div>
      </div>
      </div>
    );
  }
}