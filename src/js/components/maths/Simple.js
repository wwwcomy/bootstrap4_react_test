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
      questionCount:0,
      score:0
    };
    history.pushState(null, null, location.href);
    window.onpopstate = function(event) {
      history.go(1);
    };
  }

  componentDidMount(){
    this.setState({questionCount:20});
  }

  cancelEdit(e) {
    e.preventDefault();
    browserHistory.push('/main/organizations/'+this.props.params.orgName+'/overview'); 
  }

  check(e){
    e.preventDefault();
    let score = 0;
    for(let i=0;i<20;i++){
      this.refs["ex"+i].setState({"iconShow":true});
      score+=this.refs["ex"+i].state.right?5:0;
    }
    this.setState({score:score});
    $("#myModal").modal('show');
  }
  hide(e){
    e.preventDefault();
    for(let i=0;i<20;i++){
      this.refs["ex"+i].setState({"iconShow":false});
    }
  }
  reGenerate(e){
    e.preventDefault();
    this.setState({questionCount:0});
    setTimeout(function(){this.setState({questionCount:20})}.bind(this),100);
  }

  render() {
    let inputQuestionArr = [];
    for(let i=0;i<this.state.questionCount;i++){
      inputQuestionArr.push(
                <div className="form-group col-md-6" key={'outerDiv'+i}>
                  <InputQuestion id={'ex'+i} nameKey={'ex'+i} ref={'ex'+i} rangeFrom={0} rangeTo={13}/>
                </div>
            );
    }

    return ( 
      <div>
        <BreadCrumbNav crumbs = {this.crumbs}/>
        <div className="row">
          <div className="col-md-9">
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

          <div className="col-md-3">
            <div className="panel panel-default">
              <div className='panel-body'>
                <p>The range of the number is from 0 to 10.</p>
                <button type="button" className="btn btn-success btn-block" onClick = {this.check}>Check</button>
                <button type="button" className="btn btn-info btn-block" onClick = {this.hide}>Hide Mark</button>
                <button type="button" className="btn btn-danger btn-block" onClick = {this.reGenerate}>Re-Generate Questions</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Result</h4>
              </div>
              <div className="modal-body">
                <h1>Score: {this.state.score}</h1>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}