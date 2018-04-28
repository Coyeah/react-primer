// main.js

import React from 'react';
import { render } from 'react-dom';

import Tabs from './Tabs';
render(<Tabs />, document.getElementById('app'));

import Like from './Like';
render(<Like />, document.getElementById('like'));