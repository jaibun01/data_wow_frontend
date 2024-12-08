import Hamburger from "@/components/icons/Hamburger";
import {
  Box,
  Drawer,
  IconButton,
} from "@mui/material";
import React from "react";
import LeftSideBar from "../left-side-bar";
import ArrowNextIcon from "@/components/icons/ArrowNextIcon";
type Anchor = "top" | "left" | "bottom" | "right";

const DrawerLeft = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <React.Fragment key={"right"}>
      <IconButton onClick={toggleDrawer("right", true)}>
        <Hamburger className="cursor-pointer" />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        sx={{
          "& .MuiPaper-root": {
            background: "var(--green-500)",
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
          },
        }}
      >
        <Box
          sx={{ width: 280 }}
          role="presentation"
          onClick={toggleDrawer("right", false)}
          onKeyDown={toggleDrawer("right", false)}
        >
          <IconButton sx={{ px: "16px", pt: "32px" }}>
            <ArrowNextIcon />
          </IconButton>
          <LeftSideBar />
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerLeft;
