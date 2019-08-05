import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';

const PageSize = (props) => {
  let pageSize = useWindowSize();
  return (
    <>
      <p>监听窗口大小</p>
      <p>innerHeight: {pageSize.innerHeight}</p>
      <p>innerWidth: {pageSize.innerWidth}</p>
      <p>outerHeight: {pageSize.outerHeight}</p>
      <p>outerWidth: {pageSize.outerWidth}</p>
    </>
  )
}

export default PageSize;
