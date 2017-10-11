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
    let rangeTo = this.props.rangeTo ? this.props.rangeTo : 10;
    let rangeFrom = this.props.rangeFrom ? this.props.rangeFrom : 0;
    let operators = ["+", "-"];
    let input1 = this.randomBy(rangeFrom, rangeTo);
    let input2 = this.randomBy(rangeFrom, rangeTo);
    let operator = "";
    // using such kind of algorithm, plus:minus ~= 3:1
    if (input1 < input2) {
        operator = "+";
    } else {
        operator = operators[parseInt(2 * Math.random())];
    }
    this.setState({ 'input1': input1 });
    this.setState({ 'input2': input2 });
    this.setState({ 'operator': operator });
    let result = operator == '+' ? (input1 + input2) : (input1 - input2);
    this.setState({ 'result': result });
  }

  randomBy(lower, higher) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * lower + 1);
      case 2:
        if (higher < lower) {
          let tmp = higher;
          higher = lower;
          lower = tmp;
        }
        return parseInt(Math.random() * (higher - lower + 1) + lower);
      default:
        return 0;
    }
  }

  render() {
    return <label className="col-md-4 col-sm-4 col-xs-4" htmlFor={this.props.htmlFor}>{this.state.input1} {this.state.operator} {this.state.input2} = </label>
  }
}