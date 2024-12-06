import { BaseSelectProps, MenuItem, TextField } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
interface IOpetionSelect {
  label: string;
  value: string;
}
interface IProps extends BaseSelectProps {
  id: string;
  options: IOpetionSelect[];
}

const SelectTheme = ({ ...props }: IProps) => {
  return (
    <>
      <TextField
        select
        defaultValue={props.label}
        id={props.id}
        SelectProps={{
          IconComponent: KeyboardArrowDownIcon, // Replace default arrow
          displayEmpty: true, // Enable empty value display
          MenuProps: {
            sx: {
              "& .MuiMenuItem-root": {
                color: "var(--text)", // Default color for menu items
                "&.Mui-selected": {
                  backgroundColor: "var(--green-100)", // Custom background for selected option
                  color: "var(--text)", // Custom color for selected option
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "var(--green-100)", // Hover effect for selected option
                },
              },
            },
          },
        }}
        sx={{
          "& .MuiSelect-icon": {
            color: "var(--text)", // Custom color for the arrow
          },
          "& .MuiOutlinedInput-root": {
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
          border: `1px solid transparent`,
          height: "40px",
          "& .MuiInputBase-root": {
            fontSize: "14px",
            fontFamily: "IBMPlexSans SemiBold",
            height: "40px",
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
          "&:focus-visible": {
            borderRadius: "8px !important",
            outline: 0, //`1px solid var(--green-500)`,
          },
          ...props.sx,
        }}
      >
        <MenuItem
          sx={{ display: "none" }}
          disabled
          value={(props.label as string) || ""}
        >
          {props.label}
        </MenuItem>
        {props.options.map((option) => (
          <MenuItem
            sx={{
              backgroundColor: "var(--white)",
              "&:hover": { backgroundColor: "var(--green-100)" },
            }}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default SelectTheme;
