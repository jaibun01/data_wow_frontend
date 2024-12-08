"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { InputsFomrComment } from "./hooks/useFormComment";
import InputTheme from "@/components/form-hook/InputTheme";
import ButtonTheme from "@/components/common/Button";
import { Control, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
interface IProps {
  handleSubmit: UseFormHandleSubmit<InputsFomrComment>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, any>;
  onSubmit: SubmitHandler<InputsFomrComment>;
  handleOpenComment: () => void;
}
const FormComment = ({
  handleSubmit,
  control,
  onSubmit,
  handleOpenComment,
}: IProps) => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ mt: { xs: 2, md: 5 } }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <InputTheme
          id="content"
          placeholder="What’s on your mind..."
          sx={{
            width: "100%",
          }}
          name="content"
          control={control}
          maxRows={4}
          multiline
        />
        {/* include validation with required or other standard HTML validation rules */}
        {/* errors will return when field validation fails  */}
        <Box
          sx={{
            display: { md: "flex" },
            alignItems: "center",
            gap: 2,
            justifyContent: "end",
            mt: 2,
          }}
        >
          <ButtonTheme
            label={"Cancel"}
            theme="outline"
            fullWidth={downMd ? true : false}
            onClick={handleOpenComment}
          />
          <ButtonTheme
            fullWidth={downMd ? true : false}
            label={"Post"}
            type="submit"
            sx={{ mt: { md: 0, xs: 2 } }}
          />
        </Box>
      </form>
    </Box>
  );
};

export default FormComment;
