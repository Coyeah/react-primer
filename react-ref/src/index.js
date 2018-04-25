// index.js

import React from 'react';
import { render } from "react-dom";

import Input from './Input';
render(<Input />, document.getElementById('input'));

import Clock from './Clock';
render(<Clock />, document.getElementById('app'));
