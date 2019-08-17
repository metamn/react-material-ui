import React from "react";
import "typeface-roboto";

import Meta from "./components/Meta";

import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <>
      <Meta />
      <CssBaseline />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </>
  );
}

export default App;
