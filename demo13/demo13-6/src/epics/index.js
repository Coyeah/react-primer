import { combineEpics } from 'redux-observable';
import { fetchTotalEpic } from './fetch';
import { fetchUserEpic } from './user';

/* #1 */
const rootEpic = combineEpics(
  fetchTotalEpic,
  fetchUserEpic,
);
/* #2 */
// const rootEpic = (action$, state$) => merge(
//   pingEpic(action$, state$),
//   fetchUserEpic(action$, state$)
// );

export default rootEpic;
