import React from 'react';
import DocumentTitle from 'react-document-title';
import history from '@/utils/history';
import config from '@/common/config';
import styles from './index.module.less';

const navMap = (config => {
  let map = {};
  config.forEach(value => {
    map[value.path] = value.name;
  });
  return map;
})(config)

const BasicLayout: React.FC = (props): React.ReactElement => {
  const {pathname} = history.location;
  return (
    <DocumentTitle title={`Todo - ${navMap[pathname]}`}>
      <div id={styles.basic}>
        <div id={styles.header}>
          Todo List
        </div>
        <div id={styles.container}>
          {props.children}
        </div>
        <div id={styles.footer}>
          Copyright 2019 © Created by Coyeah
        </div>
      </div>
    </DocumentTitle>
  )
}

export default BasicLayout;
