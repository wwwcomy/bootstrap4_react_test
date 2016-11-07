import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

let element = document.getElementById('app');
ReactDOM.render(<Router history={browserHistory} routes={routes} />, element);
