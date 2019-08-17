import React from "react";
import { storiesOf } from "@storybook/react";

import Copyright from "./Copyright";
import description from "./Copyright.md";

storiesOf("Copyright", module).add("Overview", () => <Copyright />, {
  notes: { markdown: description }
});
