import React, {useState, useCallback} from 'react';

const useInputValue = (initialValue) => {
  let [value, setValue] = useState(initialValue);
  // 通过 useCallback 获取一个记忆体函数，避免每次操作对导致重新定义带来的不必要的重渲染。
  let onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  return {
    value, onChange
  };
}


export default useInputValue;
