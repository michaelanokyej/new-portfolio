import React from "react";

const myContext = React.createContext({
  drawerToggleClickHandler: () => {},
  backDropClickHandler: () => {},
});

export default myContext;
