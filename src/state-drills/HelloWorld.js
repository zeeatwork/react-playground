import React from 'react';
import ReactDOM from 'react-dom';


export default class HelloWorld extends React.Component {
  state = {
    who: "world!"
  };
  handleClick = (greeting) => {
    this.setState({
      who: greeting
    });
  }
  render() {
    return (
      <div>
        <p>Hello {this.state.who}</p>
          <button onClick={() => this.handleClick('World')}>World</button>
          <button onClick={() => this.handleClick('Friend')}>Friend</button>
          <button onClick={() => this.handleClick('React')}>React</button>
      </div>
    )
  }
}
