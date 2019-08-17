import React from "react";
import { storiesOf } from "@storybook/react";

import SignIn from "./SignIn";
import description from "./SignIn.md";

storiesOf("SignIn", module).add("Overview", () => <SignIn />, {
  notes: { markdown: description }
});
