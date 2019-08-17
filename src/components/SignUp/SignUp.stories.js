import React from "react";
import { storiesOf } from "@storybook/react";

import SignUp from "./SignUp";
import description from "./SignUp.md";

storiesOf("SignUp", module).add("Overview", () => <SignUp />, {
  notes: { markdown: description }
});
