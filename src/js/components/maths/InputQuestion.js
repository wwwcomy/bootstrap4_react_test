import React from 'react';
import Expression from './Expression';

export default class InputQuestion extends React.Component {
  constructor() {
    super();
    this.state = {
    	
    };
  }
  componentDidMount() {
  }

  render() {
    return <div>
              <Expression htmlFor={this.props.nameKey}></Expression>
              <div className="col-md-3">
                <input type="text" className="form-control" id={this.props.nameKey} />
              </div>
            </div>
  }
}