// input.js

import React, { Component } from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
	
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if (this.myTextInput !== null) {
			this.myTextInput.focus();
		}
	}

	render() {
		return (
			<div>
				<input type="text" ref={(ref) => this.myTextInput = ref} />
				<input type="button" value="Focus the text input" onClick={this.handleClick} />
			</div>
		);
	}
}

export default Input;