// main.js

// var greeter = require('./Greeter.js');
// document.getElementById('app').appendChild(greeter());

import React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter';

import './style.css';

render(<Greeter />, document.getElementById('app'));