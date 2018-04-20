// Tabs.js

import React, { Component } from 'react';

class Tabs extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);

		this.state = {
			count: 0,
		};
	}

	handleClick(e) {
		e.preventDefault();

		this.setState({
			count: this.state.count + 1,
		});
	}

	render() {
		return(
			<div>
				<p>{this.state.count}</p>
				<a href="#" onClick={this.handleClick}>更新</a>
			</div>
		)
	}
};

export default Tabs;