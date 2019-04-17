import React from 'react';

export default class App extends React.Component {
  state = {
    position: 0,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = event.target.scrollingElement.scrollTop;
    this.setState({
      position: scrollTop
    })
  }

  render() {
    return(
      <div>
        {this.props.children(this.state.position)}
      </div>
    )
  }
}
