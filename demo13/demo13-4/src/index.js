import {
  Observable, fromEvent
} from 'rxjs';
import {
  filter, map, delay, throttleTime,
  take, takeUntil,
} from 'rxjs/operators';

// 过滤掉小于3个字符长度的目标值
const input1$ = fromEvent(document.querySelector('#input1'), 'input');
const value1 = document.getElementById('value1');
input1$.pipe(
  filter(event => event.target.value.length > 2),
  map(event => event.target.value)
).subscribe(value => {
  value1.innerHTML = value;
});

// 延迟事件
const input2$ = fromEvent(document.querySelector('#input2'), 'input');
const value2 = document.getElementById('value2');
input2$.pipe(
  delay(2000),
  map(event => event.target.value)
).subscribe(value => {
  value2.innerHTML = value;
});

// 每1000ms只能通过一个事件
const input3$ = fromEvent(document.querySelector('#input3'), 'input');
const value3 = document.getElementById('value3');
input3$.pipe(
  throttleTime(1000),
  map(event => event.target.value)
).subscribe(value => {
  value3.innerHTML = value;
});

// 停止输入后200ms方能通过最新的那个事件
const input4$ = fromEvent(document.querySelector('#input4'), 'input');
const value4 = document.getElementById('value4');
input4$.pipe(
  throttleTime(1000),
  map(event => event.target.value)
).subscribe(value => {
  value4.innerHTML = value;
});

// 在3次事件后停止事件流
const input5$ = fromEvent(document.querySelector('#input5'), 'input');
const value5 = document.getElementById('value5');
input5$.pipe(
  take(3),
  map(event => event.target.value)
).subscribe(value => {
  value5.innerHTML = value;
});

// 直到其他 observable 触发事件才停止事件流
const button$ = fromEvent(document.querySelector('button'), 'click');
const input6$ = fromEvent(document.querySelector('#input6'), 'input');
const value6 = document.getElementById('value6');
input6$.pipe(
  takeUntil(button$),
  map(event => event.target.value)
).subscribe(value => {
  value6.innerHTML = value;
});
