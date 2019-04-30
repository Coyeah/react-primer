import React, {useRef} from 'react';
import useComponentSize from '../../hooks/useComponentSize'

const ListenSize = props => {
  const ref = useRef(null);
  const componentSize = useComponentSize(ref);
  return (
    <>
      <p>{`width: ${componentSize.width} / height: ${componentSize.height}`}</p>
      <textarea ref={ref} />
    </>
  )
}

export default ListenSize;
