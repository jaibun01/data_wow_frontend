"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "./header";
import Footer from "./footer";
import LeftSideBar from "./left-side-bar";

export default function LayoutGlobal({
  children,
  fullWidth,
  bgContent,
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
  bgContent?: string;
}) {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box component={"main"}>
      <Header />
      <Box component={"section"} className="w-full flex">
        <Box
          component={"section"}
          sx={{ width: "280px" }}
          className={`md:block hidden`}
        >
          <LeftSideBar />
        </Box>
        <Box
          component={"section"}
          className={`w-full h-screen ${bgContent ? bgContent : ""}`}
        >
          <Box
            className={fullWidth ? "w-full" : "container  mx-auto px-2 lg:px-0"}
          >
            <Box className={fullWidth ? "w-full" : downSM ? `w-full` : `inner`}>
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
