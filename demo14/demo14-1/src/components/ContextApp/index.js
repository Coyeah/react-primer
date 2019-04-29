import React, {useContext} from 'react';
import Store from './store';

const ContextApp = (props) => {
  const store = useContext(Store);
  return (
    <>
      <p>通过 createContext 与 useContext 获取的数据。</p>
      <p>Name: {store.name}</p>
      <p>Contact: <a href={store.contact}>{store.contact}</a></p>
    </>
  )
}


export default ContextApp;
