import React, { useState, useEffect } from 'react';

function getSize () {
  return ({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  })
}

const useWindowSize = () => {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    // 对应 class component 中的 componentDidMount 与 componentDidUpdate 的生命周期
    // console.log('useEffect: componetDidMount / componentDidUpdate');
    window.addEventListener('resize', handleResize);
    return () => {
      // 对应 class component 中的 componentWillUnmount 的生命周期
      // console.log('useEffect: componentWillUnmount');
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
}

export default useWindowSize;
