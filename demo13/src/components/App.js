import React from 'react';
import Tab from './Tab';

import { Layout } from 'antd';

const { Content, Sider } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider width={200}>
          <Tab />
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

export default App;