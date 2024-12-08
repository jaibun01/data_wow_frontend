"use client";

import useProfileStore from "@/stores/useProfileStore";
import { Avatar, Box, useMediaQuery, useTheme } from "@mui/material";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

const ProfileBadge = () => {
  const { data } = useProfileStore();
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {!downMd && (
        <Box
          component={"button"}
          sx={{
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "16px",
            fontFamily: `${inter.style.fontFamily} !important`,
            color: "var(--white)",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {data.username}
          <Avatar sx={{ ml: 1, width: 40, height: 40 }} />
        </Box>
      )}
    </>
  );
};

export default ProfileBadge;
