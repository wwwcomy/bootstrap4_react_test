import React from 'react';
import ExpressionWithOneOperator from './ExpressionWithOneOperator';

export default class InputQuestion extends React.Component {
  constructor() {
    super();
    this.state = {
      result:false,
      iconShow:false,
      right:false
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.exp1 = new ExpressionWithOneOperator();
  }
  componentDidMount() {
  }

  // TODO if blur real quickly after input, the behavior is still not correct...
  handleKeyPress(e) {
    // setting focus
    if (e.keyCode == 13) {
      let inputId = this.props.nameKey;
      let nextId = 'ex' + (parseInt(inputId.slice(2)) + 1);
      if ($("#" + nextId).length > 0) {
          $("#" + nextId).focus();
      }
    }

    let inputVal = this.refs.inputCom.value;
    if (inputVal < 0 || inputVal > 99) {
      e.preventDefault();
      return;
    }
    if (this.exp1.result == inputVal) {
      this.setState({ "right": true });
    } else {
      this.setState({ "right": false });
    }
  }

  // looks like there's something wrong on the tab handling.. so forbid the tab
  handleKeyDown(e){
    if (e.keyCode == 9) {
      e.preventDefault();
      return;
    }
  }

  render() {
    let hiddenClass = this.state.iconShow ? '' : 'hidden';
    let iconJsx;
    if(this.state.right){
      iconJsx = <span className={"glyphicon glyphicon-ok red col-md-2 " + hiddenClass}></span>
    }else{
      iconJsx = <span className={"glyphicon glyphicon-remove red col-md-2 " + hiddenClass}></span>
    }
    return <div>
              <div className="col-md-2 col-sm-2 col-xs-2"></div>
              <label className="col-md-4 col-sm-4 col-xs-4" htmlFor={this.props.htmlFor}>{this.exp1.input1} {this.exp1.operator} {this.exp1.input2} = </label>
              <div className="col-md-4 col-sm-4 col-xs-4">
                <input type="number" className="form-control" id={this.props.nameKey} onKeyUp={this.handleKeyPress} onKeyDown={this.handleKeyDown} ref="inputCom"/>
              </div>
              {iconJsx}
            </div>
  }
}