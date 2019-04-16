import React from 'react';
import {Icon} from 'antd';
import {Link} from 'react-router-dom';
import history from '@/utils/history';
import config from '@/common/config';
import styles from './index.module.less';

const BasicLayout: React.FC = (props): React.ReactElement => {
  return (
    <div id={styles.basic}>
      <div id={styles.header}>
        <h1>Todo List</h1>
        <div>
          {config.map((value, index) =>(
            <Link key={index} to={value.path} style={{margin: 5}}><Icon type={value.icon} /> {value.name}</Link>
          ))}
        </div>
      </div>
      <div id={styles.container}>
        {props.children}
      </div>
      <div id={styles.footer}>
        Copyright 2019 © Created by Coyeah
      </div>
    </div>
  )
}

export default BasicLayout;
