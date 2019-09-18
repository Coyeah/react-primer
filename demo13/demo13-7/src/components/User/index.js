import React from 'react';
import { componentFromStream } from 'recompose';
import {
  catchError,
  map,
  debounceTime,
  pluck,
  filter,
  switchMap
} from 'rxjs/operators';
import { merge, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import Component from './Component';
import Error from '../Error';

const formatUrl = user => `https://api.github.com/users/${user}`;

const User = componentFromStream(prop$ => {
  const loading$ = of(<h3>Loading...</h3>);
  const getUser$ = prop$.pipe(
    debounceTime(1000),
    pluck('user'),
    filter(user => user && user.length),
    map(formatUrl),
    switchMap(url =>
      merge(
        loading$,
        ajax(url).pipe(
          pluck('response'),
          map(Component),
          catchError(error => of(<Error {...error} />))
        )
      ) 
    )
  );
  return getUser$;
});

export default User;