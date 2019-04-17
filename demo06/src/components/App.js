import React from 'react';
import Tab from './Tab';

import { 
  Layout,
  Menu,
  Icon,
} from 'antd';

const { Content, Sider, Header } = Layout;

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      collapsed: false,
    }
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Tab />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '6px 16px' }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;