import React, { Component } from "react";
import Carousel from "./Carousel";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-title">Welcome to my album!</div>
        </div>
        <Carousel />
      </div>
    );
  }
}

export default App;
