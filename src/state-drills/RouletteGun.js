import React from 'react';
import ReactDOM from 'react-dom';


export default class RouletteGun extends React.Component {
static defaultProps = {bulletInChamber:8}
  state = {
    chamber: null, 
    spinningTheChamber: false,
    timer: null,
  }
  fireGun = () => {
    this.setState({
      spinningTheChamber: true,
      timer:setTimeout(()=>{this.resolveTimer()}, 2000)
    })
  }
resolveTimer = () => {
  this.setState ({
    chamber: Math.ceil(Math.random() * 8)
  })
}
  render() {
    return (
      <div>
        <p>{this.props.bulletInChamber}</p>
         <p> {this.state.chamber}</p>
        <p>
          {this.state.spinningTheChamber && "Spinning the chamber and pulling the trigger..."}
          {this.state.chamber === this.props.bulletInChamber && "Bang!"}
          {this.state.chamber !== this.props.bulletInChamber && "You're safe"}
        </p>
        <button onClick={() => this.fireGun()}>Pull the trigger!</button>
      </div>
    )
  }
}