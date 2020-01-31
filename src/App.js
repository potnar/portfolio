import React from "react";
import { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
