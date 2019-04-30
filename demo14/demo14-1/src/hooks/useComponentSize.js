import React, {useState, useLayoutEffect} from 'react';

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

  useLayoutEffect(() => {
    handleReszie();

    let resizeObserver = new ResizeObserver(() => handleReszie());
    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect(ref.current);
      resizeObserver = null;
    }
  }, []);

  return componentSize;
}

export default useComponentSize;
