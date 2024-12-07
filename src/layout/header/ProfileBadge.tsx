import ButtonTheme from "@/components/common/Button";
import useProfileStore from "@/stores/useProfileStore";
import { helper } from "@/utils/helpers";
import { Avatar, Popover, Typography } from "@mui/material";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

const ProfileBadge = () => {
  const { data } = useProfileStore();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLogout = () => {
    helper.clearLocalStorage();
    window.location.href = "/";
  };
  return (
    <>
      <Typography
        onClick={handleClick}
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
      </Typography>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            mt: "10px",
            p: 3,
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <ButtonTheme
          label="Log out"
          onClick={() => {
            handleLogout();
          }}
        />
      </Popover>
    </>
  );
};

export default ProfileBadge;
