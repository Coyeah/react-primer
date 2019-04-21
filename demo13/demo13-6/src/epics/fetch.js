import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { mergeMap, map, takeUntil } from 'rxjs/operators';
import {FETCH_EMOJIS_TOTAL, fetchEmojisSave} from '../actions/';

export const fetchTotalEpic = (action$, state$) => action$.pipe(
  ofType(FETCH_EMOJIS_TOTAL),
  mergeMap(action => ajax.getJSON('https://api.github.com/emojis').pipe(
    map(response => fetchEmojisSave(response)),
    takeUntil(action$.pipe(
      ofType(FETCH_EMOJIS_TOTAL)
    ))
  ))
);
