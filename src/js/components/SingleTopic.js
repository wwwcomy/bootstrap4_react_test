import React from 'react';

export default class SingleTopic extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>
    <h3>{this.props.match.params.topicId}</h3>
  </div>
  }
}