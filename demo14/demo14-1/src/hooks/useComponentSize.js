import React, {useState, useEffect, useLayoutEffect} from 'react';

function getSize(el) {
  if (!el) return {};
  return {
    width: el.offsetWidth,
    height: el.offsetHeight,
  }
}

const useComponentSize = ref => {
  let [componentSize, setComponentSize] = useState(getSize(ref.current));

  const handleReszie = () => {
    if (ref && ref.current) {
      setComponentSize(getSize(ref.current));
    }
  }
  // useLayoutEffect 与 useEffect 区别在于：执行时机不同
  // useLayoutEffect 在浏览器读取 DOM 时就开始运行，并在完成渲染的同时一并结束，最终渲染页面是完成副作用后的结果。
  // useEffect 是在完成页面渲染后再触发副作用的函数方法，并可能再次触发别的操作。
  useLayoutEffect(() => {
    handleReszie();

    let resizeObserver = new ResizeObserver(() => handleReszie());
    resizeObserver.observe(ref.current);
    console.log('useEffect: componetDidMount / componentDidUpdate');

    return () => {
      resizeObserver.disconnect(ref.current);
      resizeObserver = null;
      console.log('useEffect: componentWillUnmount');
    }
  }, []);

  return componentSize;
}

export default useComponentSize;
