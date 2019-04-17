import React from 'react';
import { BEGIN_POSTS_GET } from '../reducers';
import { connect } from 'react-redux';

import { Table } from 'antd';

const columns = [
  {
    title: '文章编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  }
];

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(BEGIN_POSTS_GET());
  }

  render() {
    return (
      <div>
        <Table dataSource={this.props.posts} columns={columns} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
});

// export default Story;
export default connect(mapStateToProps)(PostList);