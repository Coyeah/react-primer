import React, { useRef, useImperativeHandle, forwardRef } from "react";

function FancyInput(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  return <input type="text" ref={inputRef} />;
}

 export default forwardRef(FancyInput);
