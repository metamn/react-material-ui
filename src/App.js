import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";

import Meta from "./components/Meta";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <Meta />
      <CssBaseline />
      <SignIn />
    </>
  );
}

export default App;
