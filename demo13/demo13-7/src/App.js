import React from 'react';
import { Input } from 'antd';
import './App.css';
import User from './components/User';
import { componentFromStream, createEventHandler } from 'recompose';
import { map, startWith, tap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import './utils/observableConfig';

const App = componentFromStream(prop$ => {
  const { handler, stream } = createEventHandler();
  const value$ = stream.pipe(
    map(e => e.target.value),
    startWith('')
  );

  return combineLatest(prop$, value$).pipe(
    tap(console.warn),
    map(([props, value]) => (
      <div className="App">
        <Input
          onChange={handler}
          placeholder="GitHub username"
          className="Input"
        />
        <User user={value} />
      </div>
    ))
  )
});

export default App;
