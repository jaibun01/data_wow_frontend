import {
  InputAdornment,
  StandardTextFieldProps,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback } from "react";
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldError,
} from "react-hook-form";
interface IProps extends StandardTextFieldProps {
  id: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any, any>;
  name: string;
}
const InputTheme = ({ ...props }: IProps) => {
  const textComponent = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (field?: ControllerRenderProps<any, any>, errors?: FieldError) => {
      return (
        <>
          <TextField
            fullWidth={props.fullWidth}
            label={props.label?.toString() || ""}
            id={props.id}
            className="IBMPlexSans-Regular"
            error={!!errors}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& input" : {
                  height: "0px"
                },
                "& fieldset": {
                  borderColor: "transparent", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "transparent", // Border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent", // Border color when focused
                },
              },
              borderRadius: "8px !important",
              border: `1px solid var(--green-100)`,
              "& .MuiInputBase-root": {
                fontFamily: "IBMPlexSans Regular",
                height: props.multiline ? "auto" : "40px",
                borderRadius: "8px !important",
                outline: 0,
                outlineColor: "transparent",
                "&:hover": {
                  outline: 0, //`1px solid var(--green-500)`,
                  borderRadius: "8px !important",
                  outlineColor: "transparent",
                  borderColor: "transparent",
                },
              },
              "& textarea": {
                height: "auto !important",
              },
              "&:focus-visible": {
                borderRadius: "8px !important",
                outline: 0, //`1px solid var(--green-500)`,
              },

              ...props.sx,
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    {props.startIcon}
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    {props.endIcon}
                  </InputAdornment>
                ),
              },
            }}
            placeholder={props.placeholder || ""}
            variant={props.variant || "outlined"}
            multiline={props.multiline || false}
            maxRows={props.maxRows || 1}
            {...field}
          />
          {errors && (
            <Typography
              variant="caption"
              sx={{ fontSize: "12px", color: "red" }}
            >
              {errors?.message}
            </Typography>
          )}
        </>
      );
    },
    [props.endIcon, props.fullWidth, props.id, props.label, props.maxRows, props.multiline, props.placeholder, props.startIcon, props.sx, props.variant]
  );
  return (
    <>
      {props?.control ? (
        <Controller
          name={props.name || ""}
          control={props.control}
          render={({ field, fieldState: { error } }) => {
            return textComponent(field, error);
          }}
        />
      ) : (
        textComponent()
      )}
    </>
  );
};

export default InputTheme;
