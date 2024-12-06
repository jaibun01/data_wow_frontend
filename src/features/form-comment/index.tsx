"use client";
import { Box } from "@mui/material";
import { InputsFomrComment } from "./hooks/useFormComment";
import InputTheme from "@/components/form-hook/InputTheme";
import ButtonTheme from "@/components/global/Button";
import { Control, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
interface IProps {
  handleSubmit: UseFormHandleSubmit<InputsFomrComment>;
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
  return (
    <Box sx={{ mt: 5 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <InputTheme
          id="description"
          placeholder="What’s on your mind..."
          sx={{
            width: "100%",
          }}
          name="description"
          control={control}
          maxRows={4}
          multiline
        />
        {/* include validation with required or other standard HTML validation rules */}
        {/* errors will return when field validation fails  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            justifyContent: "end",
            mt: 2,
          }}
        >
          <ButtonTheme
            label={"Cancel"}
            theme="outline"
            onClick={handleOpenComment}
          />
          <ButtonTheme label={"Post"} type="submit" />
        </Box>
      </form>
    </Box>
  );
};

export default FormComment;
