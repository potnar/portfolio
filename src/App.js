import React from "react";
import { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App" style={{ height: "100%" }}>
        <Navbar
          drawerClickHandler={this.drawerToggleClickHandler}
          anim={this.state.sideDrawerOpen}
        />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Header title="Junior Frontend Developer" />
        <Content />
      </div>
    );
  }
}

export default App;
