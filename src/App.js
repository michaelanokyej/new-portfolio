import React from "react";
import NavBar from "./components/navbar/NavBar";
import MainPage from "./components/mainpage/MainPage";
import myContext from "./components/context/myContext";
import SideDrawer from "./components/sidedrawer/SideDrawer";
import BackDrop from "./components/backdrop/BackDrop";
import Footer from "./components/footer/Footer";
// import { format } from "date-fns";
import "./App.css";

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {

    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <BackDrop />;
    }

    const contextValue = {
      drawerToggleClickHandler: this.drawerToggleClickHandler,
      backDropClickHandler: this.backDropClickHandler,
    };
    return (
      <div className="App">
        <myContext.Provider value={contextValue}>
          <NavBar />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}
          <MainPage />
          <Footer />
        </myContext.Provider>
        
      </div>
    );
  }
}

export default App;
