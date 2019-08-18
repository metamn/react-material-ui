import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "typeface-roboto";

import Meta from "./components/Meta";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import PasswordForgot from "./components/PasswordForgot";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Meta />
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/password-forgot" component={PasswordForgot} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
