import React from 'react';
import ReactDOM from 'react-dom';


export default class Bomb extends React.Component {
  resetTimer() {
    clearInterval(this.state.timer)
  }
  state = {
    count: 0,
    timer: null,
  }
  componentDidMount() {
    this.setState({timer:setInterval(()=>this.setState({count:this.state.count+1}), 1000)})
  }

  render() {
    return (
    <div>
      <p> 
          {this.state.count%2 === 0 && this.state.count < 8 && "Tick"}
          {this.state.count%2 !== 0 && "Tock"}
          {this.state.count >= 8 && "BOOM!!!!!"}
          {this.state.count >= 8 && this.resetTimer()}
      </p>
    </div>
    )
  }

  componentWillUnmount() {
    this.resetTimer()
  }
}
