import React from "react";

const myContext = React.createContext({
  drawerToggleClickHandler: () => {},
  backDropClickHandler: () => {},
  pageVariants: {},
  pageTransition: {},
  blogs: [],
  blogToShowId: ""
});

export default myContext;
