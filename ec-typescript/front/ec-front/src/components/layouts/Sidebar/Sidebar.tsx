import React from "react";
import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: 200,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 200,
          boxSizing: "border-box",
          marginTop: "46px",
          position: "fixed",
          backgroundColor: "#efefef",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          {["tops", "inners", "bottoms", "shoes"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      ;
    </Drawer>
  );
};