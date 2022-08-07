import React from "react";

class CntCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.increaseCounter = this.increaseCounter.bind(this);
  }
  increaseCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.increaseCounter}>Click Me</button>
        <ChildCounter counter={this.state.counter} />
      </div>
    );
  }
}

class ChildCounter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.counter}</div>;
  }
}
export default CntCounter;
