import { Box } from "@mui/material";
import useSignIn from "./hooks/useSignin";
import InputTheme from "@/components/form-hook/InputTheme";
import ButtonTheme from "@/components/common/Button";

const FormSignIn = () => {
  const {
    methods: { control, handleSubmit },
    onSubmit,
  } = useSignIn();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Box
        component={"form"}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          maxWidth: "384px",
          mt: { xs: 10, md: 0 },
          px: 2,
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <InputTheme
          id="username"
          placeholder="username"
          sx={{
            width: "100%",
            background: "var(--white)",
          }}
          name="username"
          control={control}
        />
        <InputTheme
          id="password"
          placeholder="password"
          sx={{
            width: "100%",
            background: "var(--white)",
          }}
          name="password"
          control={control}
        />
        <ButtonTheme label={"Sign in"} type="submit" fullWidth />
      </Box>
    </Box>
  );
};
export default FormSignIn;
