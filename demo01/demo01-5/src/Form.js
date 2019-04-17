// Form.js

import React, { Component } from 'react';

class Form extends Component {
	render() {
		return (
			<div>
				<Text />
				<hr />
				<CheckBox />
				<hr />
				<ChoiceBox />
				<hr />
				<Select />
				<hr />
			</div>
		);
	}
}

class Text extends Component {
	constructor(props) {
		super(props);

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleTextareaChange = this.handleTextareaChange.bind(this);

		this.state = {
			inputValue: '',
			textareaValue: '',
		};
	}

	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value,
		});
	}

	handleTextareaChange(e) {
		this.setState({
			textareaValue: e.target.value,
		});
	}

	render() {
		const { inputValue, textareaValue } = this.state;
		return (
			<div>
				<p>input: <input type="text" value={inputValue} onChange={this.handleInputChange} /></p>
				<p>textarea: <textarea value={textareaValue} onChange={this.handleTextareaChange} /></p>
			</div>
		);
	}
}

class CheckBox extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			radioValue: '',
		}
	}

	handleChange(e) {
		this.setState({
			radioValue: e.target.value,
		});
	}

	render() {
		const { radioValue } = this.state;

		return (
			<div>
				<p>gender:</p>
				<label>
					male: <input type="radio" value="male" checked={radioValue === 'male'} onChange={this.handleChange} />
				</label>
				<label>
					female: <input type="radio" value="female" checked={radioValue === 'female'} onChange={this.handleChange} />
				</label>
			</div>
		)
	}
}

class ChoiceBox extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			coffee: [],
		};
	}

	handleChange(e) {
		const { checked, value } = e.target;
		let { coffee } = this.state;

		if (checked && coffee.indexOf(value) === -1) {
			coffee.push(value);
		} else {
			coffee = coffee.filter(i => i !== value);
		}

		this.setState({
			coffee,
		});
	}

	render() {
		const { coffee } = this.state;

		return (
			<div>
				<p>Please choose your favorite coffee: </p>
				<label>
					<input type="checkbox" value="Cappuccino" checked={coffee.indexOf('Cappuccino') !== -1} onChange={this.handleChange} />
					Cappuccino
				</label> 
				<br />
				<label>
					<input type="checkbox" value="CafeMocha" checked={coffee.indexOf('CafeMocha') !== -1} onChange={this.handleChange} />
					CafeMocha
				</label> 
				<br />
				<label>
					<input type="checkbox" value="CafeLatte" checked={coffee.indexOf('CafeLatte') !== -1} onChange={this.handleChange} />
					CafeLatte
				</label> 
				<br />
				<label>
					<input type="checkbox" value="Machiatto" checked={coffee.indexOf('Machiatto') !== -1} onChange={this.handleChange} />
					Machiatto
				</label> 
				<br />
			</div>
		);
	}
}

class Select extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.handleChange = this.handleChange.bind(this);

	// 	this.state = {
	// 		area: '',
	// 	};
	// }

	// handleChange(e) {
	// 	this.setState({
	// 		area: e.target.value,
	// 	});
	// }

	// render() {
	// 	const { area } = this.state;

	// 	return (
	// 		<select value={area} onChange={this.handleChange}>
	// 			<option value="beijing">beijing</option>
	// 			<option value="shanghai">shanghai</option>
	// 			<option value="hangzhou">hangzhou</option>
	// 		</select>
	// 	);
	// }
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			area: ['beijing','shanghai'],
		};
	}

	handleChange(e) {
		const { options } = e.target;
		const area = Object.keys(options).filter(i => options[i].selected === true).map(i => options[i].value);

		this.setState({
			area,
		});
	}

	render() {
		const { area } = this.state;

		return (
			<select multiple={true} value={area} onChange={this.handleChange}>
				<option value="beijing">beijing</option>
				<option value="shanghai">shanghai</option>
				<option value="hangzhou">hangzhou</option>
			</select>
		);
	}
}

export default Form;