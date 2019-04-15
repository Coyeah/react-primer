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
    <div id={styles.basic}>
      <DocumentTitle title={`medo - ${navMap[pathname]}`}>
        {props.children}
      </DocumentTitle>
    </div>
  )
}

export default BasicLayout;
