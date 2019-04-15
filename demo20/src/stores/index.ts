import React, {createContext} from 'react';
import todoStore from './Todo';

const Context = createContext(todoStore);

export default Context;
