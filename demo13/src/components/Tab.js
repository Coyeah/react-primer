import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import {
  Menu,
  Icon
} from 'antd';

const { SubMenu } = Menu;

class Tab extends React.Component {
  render() {

    const siderList = [
      {
        name: '首页',
        children: ["Home", "PostList", "UserList"]
      }
    ];

    let activeClass = "active";

    return (
      <Menu
        mode="inline"
        theme="dark"
        style={{ width: 200, height: '100%' }}
      >
        <SubMenu key="首页" title="首页">
          <Menu.Item key="Home"><Link to="/Home" activeClassName={activeClass}>Home</Link></Menu.Item>
          <Menu.Item key="PostList"><Link to="/PostList" activeClassName={activeClass}>PostList</Link></Menu.Item>
          <Menu.Item key="UserList"><Link to="/UserList" activeClassName={activeClass}>UserList</Link></Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Tab;

// class MenuLi extends React.Component {
//   render() {
//     // let linkTo = this.props.name == "Home" ? "/" : "/" + this.props.name;
//     // let activeClass = this.props.name == "Home" ? "" : "active";
//     let linkTo = "/" + this.props.name;
//     let activeClass = "active";

//     return (
//       <li>
//         <Link to={linkTo} activeClassName={activeClass}>
//           {this.props.name}
//         </Link>
//       </li>
//     );
//   }
// }

// class MenuUl extends React.Component {
//   render () {
//     return (
//       <ul>
//         {
//           list.map(function(menuli) {
//             return <MenuLi name={menuli} />
//           })
//         }
//       </ul>
//     );
//   }
// }

// class Menu extends React.Component {
//   render() {
//     return (
//       <nav>
//         <div id="menu">
//           <MenuUl />
//         </div>
//       </nav>
//     );
//   }
// }

// export default Menu;