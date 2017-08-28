import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SingleTopic from './SingleTopic';

export default class Topic extends React.Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
  }
  click(){
    this.props.history.push('/about');
  }

  render() {
    return  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${this.props.match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${this.props.match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${this.props.match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
      <li>
        <Link to={`/about`}>
          About
        </Link>
      </li>
      <li>
        <button onClick={this.click}>test</button>
      </li>
    </ul>

    <Route path={`${this.props.match.url}/:topicId`} component={SingleTopic}/>
    <Route exact path={this.props.match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
  }
}