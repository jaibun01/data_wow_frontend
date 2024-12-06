"use client";

import { Box } from "@mui/material";
import Header from "./header";
import Footer from "./footer";
import LeftSideBar from "./leftSideBar";

export default function LayoutGlobal({
  children,
  fullWidth,
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <Box component={"main"}>
      <Header />
      <Box component={"section"} className="w-full flex">
        <Box component={"section"} sx={{ width: "280px" }} className={`md:block hidden`}>
          <LeftSideBar />
        </Box>
        <Box component={"section"} className="w-full">
          <Box
            className={fullWidth ? "w-full" : "container mx-auto px-2 lg:px-0"}
          >
            {children}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
