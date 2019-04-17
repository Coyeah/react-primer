// Like.js

import React, { Component } from 'react';

class Like extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);

		this.state = {
			liked: false,
		};
	}

	handleClick(e) {
		e.preventDefault();

		this.setState({
			liked: !this.state.liked,
		}); 
	}

	render() {
		let text = this.state.liked ? 'like' : 'haven\'t liked';

		return (
			<div>
				<p>You {text} this.</p>
				<a href="#" onClick={this.handleClick}>Click to toggle</a>
			</div>
		);
	}
}

export default Like;