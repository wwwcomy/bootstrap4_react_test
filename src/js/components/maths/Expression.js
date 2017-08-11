import React from 'react';

export default class Expression extends React.Component {
  constructor() {
    super();
    this.state = {
    	input1:'',
    	input2:'',
    	operator:''
    };
  }
  componentDidMount() {
    let operators = ["+", "-"];
    let input1 = parseInt(10 * Math.random());
    let input2 = parseInt(10 * Math.random());
    let operator = "";
    // using such kind of algorithm, plus:minus ~= 3:1
    if (input1 < input2) {
      operator = "+";
    } else {
      operator = operators[parseInt(2 * Math.random())];
    }
    this.setState({'input1' : input1});
    this.setState({'input2' : input2});
    this.setState({'operator' : operator});
    let result = operator=='+'?(input1+input2):(input1-input2);
    this.setState({'result' : result});
  }

  render() {
    return <label className="col-md-2" htmlFor={this.props.htmlFor}>{this.state.input1} {this.state.operator} {this.state.input2} = </label>
  }
}