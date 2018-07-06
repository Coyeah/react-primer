import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

let list = ["Home", "PostList", "UserList"];

class MenuLi extends React.Component {
  render() {
    // let linkTo = this.props.name == "Home" ? "/" : "/" + this.props.name;
    // let activeClass = this.props.name == "Home" ? "" : "active";
    let linkTo = "/" + this.props.name;
    let activeClass = "active";

    return (
      <li>
        <Link to={linkTo} activeClassName={activeClass}>
          {this.props.name}
        </Link>
      </li>
    );
  }
}

class MenuUl extends React.Component {
  render () {
    return (
      <ul>
        {
          list.map(function(menuli) {
            return <MenuLi name={menuli} />
          })
        }
      </ul>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <nav>
        <div id="menu">
          <MenuUl />
        </div>
      </nav>
    );
  }
}

export default Menu;