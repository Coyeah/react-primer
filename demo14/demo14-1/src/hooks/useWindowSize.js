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
    window.addEventListener('resize', handleResize);
    // console.log('useEffect: componetDidMount / componentDidUpdate');
    return () => {
      window.removeEventListener('resize', handleResize);
      // console.log('useEffect: componentWillUnmount');
    }
  }, []);

  return windowSize;
}

export default useWindowSize;
