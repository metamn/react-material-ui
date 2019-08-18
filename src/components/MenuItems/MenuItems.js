import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AppsIcon from "@material-ui/icons/Apps";
import CheckIcon from "@material-ui/icons/Check";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import ExtensionIcon from "@material-ui/icons/Extension";

const mainMenuItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AppsIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CheckIcon />
      </ListItemIcon>
      <ListItemText primary="Actions" />
    </ListItem>
  </div>
);

const secondaryMenuItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ExtensionIcon />
      </ListItemIcon>
      <ListItemText primary="Marketplace" />
    </ListItem>
  </div>
);

export { mainMenuItems, secondaryMenuItems };
