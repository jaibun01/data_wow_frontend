"use client";
import useProfileStore from "@/stores/useProfileStore";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const ButtonTheme = dynamic(() => import('@/components/common/Button'), { ssr: false })
const ProfileBadge = dynamic(() => import('./ProfileBadge'), { ssr: false })

const Header = () => {
  const router = useRouter();
  const { data } = useProfileStore();
  return (
    <Box
      component={"header"}
      className="castoro-regular-italic px-2 md:px-[32px] w-full"
      sx={{
        background: "var(--green-500)",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        className="castoro-regular-italic "
        variant="h5"
        component="div"
        sx={{ fontSize: "20px", color: "var(--white)" }}
      >
        a Board
      </Typography>
      {data.sub ? (
        <ProfileBadge />
      ) : (
        <ButtonTheme
          label="Sign In"
          onClick={() => {
            router.push("/signin");
          }}
        />
      )}
    </Box>
  );
};

export default Header;
