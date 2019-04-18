import {
  Observable, fromEvent
} from 'rxjs';
import {
  map, switchMap, takeUntil
} from 'rxjs/operators';

const box = document.getElementById('box');
const mouseDown$ = fromEvent(box, 'mousedown');
const mouseMove$ = fromEvent(document, 'mousemove');
const mouseUp$ = fromEvent(document, 'mouseup');

const getTranslate = element => {
  // 返回的style是一个实时的 CSSStyleDeclaration 对象，当元素的样式更改时，它会自动更新本身。
  const style = getComputedStyle(element);
  const regExp = /matrix\((\d+,\s){4}(\d+),\s(\d+)/i;
  const result = style.transform.match(regExp);
  if (result) {
    return {
      x: parseInt(result[2], 10),
      y: parseInt(result[3], 10),
    }
  } else {
    return {
      x: 0,
      y: 0,
    }
  }
}

const setTranslate = (element, pos) => {
  console.log(pos);
  box.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
}

mouseDown$.pipe(
  // map 过滤
  map(event => ({
    pos: getTranslate(box),
    event,
  })),
  // 遍历每一个可观测的值，摊平成一个序列
  switchMap(initialState => {
    const initialPos = initialState.pos,
      {clientX, clientY} = initialState.event;
    return mouseMove$.pipe(
      map(moveEvent => ({
        x: moveEvent.clientX - clientX + initialPos.x,
        y: moveEvent.clientY - clientY + initialPos.y,
      })),
      // 让值传到下一个可观察序列中
      takeUntil(mouseUp$)
    );
  })
).subscribe(pos => {
  setTranslate(box, pos);
})
