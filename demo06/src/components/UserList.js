import React from 'react';
import { BEGIN_USERS_GET } from '../reducers';
import { connect } from 'react-redux';

import { Table } from 'antd';

const columns = [
  {
    title: '用户编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '名字',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '电子邮箱',
    dataIndex: 'email',
    key: 'email',
  }
];

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(BEGIN_USERS_GET());
  }

  render() {
    return (
      <div>
        <Table dataSource={this.props.users} columns={columns} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

export default connect(mapStateToProps)(UserList);