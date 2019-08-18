import React from "react";
import { storiesOf } from "@storybook/react";

import MenuItems from "./MenuItems";
import description from "./MenuItems.md";

storiesOf("MenuItems", module).add("Overview", () => <MenuItems />, {
  notes: { markdown: description }
});
