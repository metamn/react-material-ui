import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";

import Meta from "./components/Meta";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Meta />
      <CssBaseline />
      <SignUp />
    </>
  );
}

export default App;
