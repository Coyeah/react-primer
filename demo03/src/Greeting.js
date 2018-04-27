// App.js

import React, { Component } from 'react';

class Greeting extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		name: 'React defaultProps demo',
	}

	render() {
		return (
			<div>
				Hello, {this.props.name}
			</div>
		);
	}
}

export default Greeting;