import React, { Component } from "react";

class MyTimer extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    console.log("componentDidMount");

    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
      this.setState({ compteur: this.state.compteur + 1 });
      console.log("un update a eu lieu");
      // Condition
      if (this.state.count === 20) {
        this.setState({ count: (this.state.count = 0) });
      }
    }, 1000);
  }

  componentWillMount() {
    console.log("coucou");
  }

  render() {
    return (
      <div className="timer">
        <h1 className="count">{this.state.count}</h1>
      </div>
    );
  }
}

export default MyTimer;
