import React from 'react';
import Expression from './Expression';

export default class InputQuestion extends React.Component {
  constructor() {
    super();
    this.state = {
      result:false,
      iconShow:false,
      right:false
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
  }

  handleKeyPress(e) {

    // setting focus
    if (e.keyCode == 13) {
      let inputId = this.props.nameKey;
      let nextId = 'ex' + (parseInt(inputId.slice(2)) + 1);
      if ($("#" + nextId).length > 0) {
          $("#" + nextId).focus();
      }
    }

    let expression = this.refs.expression;
    let result = expression.state.result;
    let inputVal = this.refs.inputCom.value;
    if (inputVal < 0 || inputVal > 99) {
      e.preventDefault();
      return;
    }
    if (result == inputVal) {
      this.setState({ "right": true });
    } else {
      this.setState({ "right": false });
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
              <Expression htmlFor={this.props.nameKey} ref="expression" rangeFrom={this.props.rangeFrom} rangeTo={this.props.rangeTo}></Expression>
              <div className="col-md-4 col-sm-4 col-xs-4">
                <input type="number" className="form-control" id={this.props.nameKey} onKeyPress={this.handleKeyPress} onKeyUp={this.handleKeyPress} ref="inputCom"/>
              </div>
              {iconJsx}
            </div>
  }
}