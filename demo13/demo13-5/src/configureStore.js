import { merge } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { ofType, combineEpics, createEpicMiddleware } from 'redux-observable';

export const INCREMENT = Symbol('increment');
export const INCREMENT_IF_ODD = Symbol('increment_if_ODD');

export const increment = () => ({ type: INCREMENT });
export const incrementIfOdd = () => ({ type: INCREMENT_IF_ODD });

const incrementIfOddEpic = (action$, state$) => action$.pipe(
  ofType(INCREMENT_IF_ODD),
  filter(() => state$.value.counter % 2 === 1),
  map(() => increment())
)

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ counter });
const rootEpic = combineEpics(incrementIfOddEpic);
/* #1 */
// const rootEpic = combineEpics(
//   pingEpic,
//   fetchUserEpic
// );
/* #2 */
// const rootEpic = (action$, state$) => merge(
//   pingEpic(action$, state$),
//   fetchUserEpic(action$, state$)
// );

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store;
