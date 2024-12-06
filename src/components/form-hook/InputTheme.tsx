import {
  InputAdornment,
  StandardTextFieldProps,
  TextField,
} from "@mui/material";
import React from "react";
interface IProps extends StandardTextFieldProps {
  id: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
const InputTheme = ({ ...props }: IProps) => {
  return (
    <TextField
      label={props.label || ""}
      id={props.id}
      className="IBMPlexSans-Regular"
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'transparent', // Default border color
          },
          '&:hover fieldset': {
            borderColor: 'transparent', // Border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: 'transparent', // Border color when focused
          },
        },
        borderRadius: "8px !important",
        border: `1px solid var(--green-100)`,
        height: "40px",
        "& .MuiInputBase-root": {
          fontFamily: "IBMPlexSans Regular",
          height: "40px",
          borderRadius: "8px !important",
          outline: 0,
          outlineColor: 'transparent',
          "&:hover": {
            outline: 0, //`1px solid var(--green-500)`,
            borderRadius: "8px !important",
            outlineColor: 'transparent',
            borderColor: 'transparent'
          },
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
            <InputAdornment position="start">{props.startIcon}</InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">{props.endIcon}</InputAdornment>
          ),
        },
      }}
      placeholder={props.placeholder || ""}
      variant={props.variant || "outlined"}
    />
  );
};

export default InputTheme;
