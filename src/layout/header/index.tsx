import ButtonTheme from "@/components/common/Button";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
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
      <ButtonTheme
        label="Sign In"
        onClick={() => {
          router.push("/signin");
        }}
      />
    </Box>
  );
};

export default Header;
