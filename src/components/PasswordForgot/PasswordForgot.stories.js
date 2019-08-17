import React from "react";
import { storiesOf } from "@storybook/react";

import PasswordForgot from "./PasswordForgot";
import description from "./PasswordForgot.md";

storiesOf("PasswordForgot", module).add("Overview", () => <PasswordForgot />, {
  notes: { markdown: description }
});
