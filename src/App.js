import React from "react";
import { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import TopDrawer from "./components/TopDrawer/TopDrawer";
import Backdrop from "./components/Backdrop";

class App extends Component {
  state = {
    topDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { topDrawerOpen: !prevState.topDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ topDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.topDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App" style={{ height: "100%" }}>
        <Navbar
          drawerClickHandler={this.drawerToggleClickHandler}
          anim={this.state.topDrawerOpen}
        />
        <TopDrawer show={this.state.topDrawerOpen} />
        {backdrop}
        <Header title="Junior Frontend Developer" />
        <Content />
      </div>
    );
  }
}

export default App;
