import React from "react";

const myContext = React.createContext({
  drawerToggleClickHandler: () => {},
  backDropClickHandler: () => {},
  pageVariants: {},
  pageTransition: {}
});

export default myContext;
