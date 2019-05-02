import React, {useState, useCallback} from 'react';

const useInputValue = (initialValue) => {
  let [value, setValue] = useState(initialValue);
  let onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  return {
    value, onChange
  };
}


export default useInputValue;
