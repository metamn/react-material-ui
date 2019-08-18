import React from "react";
import { storiesOf } from "@storybook/react";

import Dashboard from "./Dashboard";
import description from "./Dashboard.md";

storiesOf("Dashboard", module).add("Overview", () => <Dashboard />, {
  notes: { markdown: description }
});
