"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import dynamic from "next/dynamic";
const LeftSideBar = dynamic(() => import("./left-side-bar"), { ssr: false });
const Footer = dynamic(() => import("./footer"), { ssr: false });
const Header = dynamic(() => import("./header"), { ssr: false });

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
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box component={"main"}>
      <Header />
      <Box component={"section"} className="w-full flex">
        {!downMd && (
          <Box
            component={"section"}
            sx={{ width: "280px" }}
            className={`md:block hidden`}
          >
            <LeftSideBar />
          </Box>
        )}

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
