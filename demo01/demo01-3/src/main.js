// main.js

import React from 'react';
import { render } from 'react-dom';

import Tabs from './Tabs';
render(<Tabs data="ReactProps" />, document.getElementById('tabs'));

import Greeting from './Greeting';
render(<Greeting />, document.getElementById('greeting'));
