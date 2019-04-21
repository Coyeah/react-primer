import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { mergeMap, map, takeUntil } from 'rxjs/operators';
import {FETCH_GITHUB_USER, fetchGithubUserSave} from '../actions';

export const fetchUserEpic = (action$, state$) => action$.pipe(
  ofType(FETCH_GITHUB_USER),
  mergeMap(action => ajax.getJSON(`https://api.github.com/users/${action.name}`).pipe(
    map(response => fetchGithubUserSave(response)),
    takeUntil(action$.pipe(
      ofType(FETCH_GITHUB_USER)
    ))
  ))
);
