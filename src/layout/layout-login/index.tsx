"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const LayoutLogin = ({
  children,
  fullWidth,
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
}) => {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box component={"main"} className="bg-green-500">
      <Box component={"section"} className={`w-full h-screen `}>
        <Box
          className={`${fullWidth ? "" : "container mx-auto px-2 lg:px-0"}   `}
        >
          <Box className={fullWidth ? "w-full" : downSM ? `w-full` : `inner`}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutLogin;
