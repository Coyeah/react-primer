import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

let list = ["Home", "Story", "Travel"];

class MenuLi extends React.Component {
  render() {
    let linkTo = this.props.name == "Home" ? "/" : "/" + this.props.name;
    let activeClass = this.props.name == "Home" ? "" : "active";

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