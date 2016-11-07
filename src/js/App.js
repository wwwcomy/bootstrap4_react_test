import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0
		};
		this.btnClick = this.btnClick.bind(this);
	}
	btnClick() {
		let stateCount = this.state.count;
		this.setState({
			count: ++stateCount
		});
	}
	render() {
		return <div>
			  <Header />
			  {this.props.children}
			  <Footer />
			</div>
	}
}