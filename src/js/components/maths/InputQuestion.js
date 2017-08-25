import React from 'react';
import Expression from './Expression';

export default class InputQuestion extends React.Component {
  constructor() {
    super();
    this.state = {
    	
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
  }

  handleKeyPress(e) {
    let expression = this.refs.expression;
    let result = expression.state.result;
    let inputVal = this.refs.inputCom.value;
    if (inputVal < 0 || inputVal > 99) {
      e.preventDefault();
      return;
    }
    if (result == inputVal) {
      this.setState({ "result": true });
    } else {
      this.setState({ "result": false });
    }
  }

  render() {
    return <div>
              <Expression htmlFor={this.props.nameKey} ref="expression"></Expression>
              <div className="col-md-3">
                <input type="number" className="form-control" id={this.props.nameKey} onKeyPress={this.handleKeyPress} onKeyUp={this.handleKeyPress} ref="inputCom"/>
              </div>
            </div>
  }
}