"use client";

import FormSignIn from "@/features/form-signin";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function LoginPage() {
  return (
    <Box
      sx={{
        display: { xs: "flex" },
        flexDirection: { md: "row", xs: "column-reverse" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          height: { md: "100vh" },
          width: { xs: "100%", md: "60%" },
        }}
      >
        <FormSignIn />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: { md: "100vh" },
          minHeight: "362px",
          borderTopLeftRadius: { md: "36px" },
          borderBottomLeftRadius: { xs: "36px", md: "36px" },
          borderBottomRightRadius: { xs: "36px", md: "0px" },
          width: { xs: "100%", md: "40%", background: "var(--green-300)" },
        }}
      >
        <Image
          src={"/notebook.png"}
          width={300}
          height={230}
          alt={"notebook"}
        />
        <Typography
          className="castoro-regular-italic "
          variant="h3"
          component="div"
          sx={{ fontSize: "28px", color: "var(--white)", mt: "42px" }}
        >
          a Board
        </Typography>
      </Box>
    </Box>
  );
}
