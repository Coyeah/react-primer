import React, {useContext} from 'react';
import {
  Row, Col, Badge,
} from 'antd';
import classnames from 'classnames';
import todoStore from '@/stores/Todo';
import Context from '@/stores/index';
import styles from './index.module.less';

const badgeList = ['processing', 'success', 'default', 'error'];

const ListItem: React.FC = (props): React.ReactElement => {
  const {todoStore: {list}} = useContext(Context);
  const value = list.filter(value => value.id === props.id).pop();
  // console.log(value);
  let cx = classnames({[styles.lineThrough]: value.status === 2});
  return (
    <div className={styles.item} style={{backgroundColor: value.status === 1 ? 'rgba(0,121,107,0.1)' : (value.status === 3 && 'rgba(220,20,60,0.1)')}}>
      <div
        className={styles.content}
        onClick={() => props.onClick()}
      >
        <Badge status={badgeList[value.status]} />
        <span className={cx}>{value.content}</span>
      </div>
      <div className={styles.options}>
        {props.optionRender(value)}
      </div>
    </div>
  )
}

export default ListItem;

/* without hooks to use context */
// class ListItem extends React.Component {
//   render () {
//     console.log(this.props);
//     return (
//       <Row>
//         <Col>{this.props.id}</Col>
//       </Row>
//     )
//   }
// }
// ListItem.contextType = Context;
