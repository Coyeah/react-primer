import React, {useRef} from 'react';
import FancyInput from './FancyInput';

const TurnInput = (props) => {
  const inputRef = useRef(null);
  const onInputFocus = () => {
    inputRef.current.focus();
  }
  return (
    <>
      <p>父组件控制子组件的 DOM，通过 useImperativeHandle。</p>
      <FancyInput ref={inputRef} />
      <button onClick={onInputFocus}>Input Focus</button>
    </>
  );
}

export default TurnInput;
