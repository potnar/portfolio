import React from "react";
import { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import TopDrawer from "./components/TopDrawer/TopDrawer";
import Backdrop from "./components/Backdrop";
import Technologies from "./components/Technologies";

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
    return (
      <div className="App">
        <Navbar
          drawerClickHandler={this.drawerToggleClickHandler}
          anim={this.state.topDrawerOpen}
        />
        <TopDrawer show={this.state.topDrawerOpen} />
        {this.state.topDrawerOpen && (
          <Backdrop click={this.backdropClickHandler} />
        )}
        <Header title="Junior Frontend Developer" />
        <Content />
        <Technologies />
      </div>
    );
  }
}

export default App;
