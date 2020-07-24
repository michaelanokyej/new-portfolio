import React from "react";

const myContext = React.createContext({
  drawerToggleClickHandler: () => {},
  backDropClickHandler: () => {},
  pageVariants: {},
  pageTransition: {},
  blogs: []
});

export default myContext;
