'use strict';
var path = require('path');

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname + '/dist/',
		filename: 'bundle.js'
	},
	externals: {
		'react': 'React'
	},
	module: {
		rules: [
			{ test: /\.js$/, loader: 'jsx-loader!babel-loader', include: /src/ },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
		]
	}
};