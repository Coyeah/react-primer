import {
  Observable, fromEvent, merge
} from 'rxjs';
import {
  map, scan
} from 'rxjs/operators';

const plusEl = document.querySelector('#plus');
const minusEl = document.querySelector('#minus');
const counterEl = document.querySelector('#result');

const plus$ = fromEvent(plusEl, 'click')
  .pipe(map(() => 1));

const minus$ = fromEvent(minusEl, 'click')
  .pipe(map(() => -1));

const source = merge(minus$, plus$);

source.pipe(
  scan((acc, v) => {
    return acc + v;
  }, 0)
).subscribe(v => {
  counterEl.innerHTML = v;
});
