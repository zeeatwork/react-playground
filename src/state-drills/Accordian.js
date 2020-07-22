import React from 'react';
import '../Accordian.css';


export default class Accordian extends React.Component {
  static defaultProps = {sections:[]}

  state = {
    lastClicked: null,
  }
  handleClick = (index) => {
    this.setState({ lastClicked: index })
  }
  render() {
    const sections = this.props.sections;
    const liSections = sections.map((section, index) => {
      return (
        <li key={index}>
          <button onClick={() => this.handleClick(index)}>{section.title}</button>
          {this.state.lastClicked === index && <p>{section.content}</p>}
        </li>
      )
    })
    return (
      <ul>
        {liSections}
      </ul>
    )
  }
}
