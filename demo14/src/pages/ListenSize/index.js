import React, {useRef} from 'react';
import useComponentSize from '../../hooks/useComponentSize'
import useInputValue from '../../hooks/useInputValue'

const ListenSize = props => {
  const ref = useRef(null);
  const componentSize = useComponentSize(ref);
  const inputObject = useInputValue('Coyeah');
  return (
    <>
      <p>{`width: ${componentSize.width} / height: ${componentSize.height}`}</p>
      <textarea ref={ref} {...inputObject} />
      <span style={{marginLeft: 20}}><b>textarea value: </b>{inputObject.value}</span>
    </>
  )
}

export default ListenSize;
