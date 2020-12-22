import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(),
      isPrecise: true
    };
    this.togglePrecise = this.togglePrecise.bind(this);
  }
  startInterval() {
    let delay = this.state.isPrecise ? 100 : 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date()});
    }, delay);
  }
  togglePrecise() {
    const newVal = !this.state.isPrecise;
    this.setState({ isPrecise: newVal });
  }
  componentDidMount() {
    this.intervalID = this.startInterval();
  }
  componentDidUpdate(prevProps) {
    if (this.state.isPrecise === prevProps.isPrecise) {
      return;
    }
    clearInterval(this.intervalID);
    this.intervalID = this.startInterval();
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  render() {
    return (
      <div>
        {this.state.isPrecise ? this.state.date.toISOString() : this.state.date.toLocaleTimeString()}
        <button onClick={this.togglePrecise}>Toggle Precise</button>
      </div>
    );
  }
}