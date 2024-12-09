import {
  BaseSelectProps,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldError,
} from "react-hook-form";
import { useCallback, useState } from "react";
import TickIcon from "../icons/TickIcon";
interface IOpetionSelect {
  label: string;
  value: string;
}
interface IProps extends BaseSelectProps {
  id: string;
  options: IOpetionSelect[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control?: Control<any, any>;
  name: string;
}

const SelectTheme = ({ ...props }: IProps) => {
  const [select, setSelect] = useState<string>();
  console.log("select", select);
  
  const selectComponent = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (field?: ControllerRenderProps<any, any>, errors?: FieldError) => {
      return (
        <>
          <TextField
            select
            defaultValue={props.label?.toString() || ""}
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
                    "&.Mui-selected::before": {
                      // content: "`✔`", /* Unicode checkmark or replace with your icon */
                      marginRight: '8px',
                      color: 'green'
                    }
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
                "& .tick-icon": {
                  display: 'none'
                },
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
            onChange={(e) => {
              setSelect(e.target.value as unknown as string);
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (props?.onChange as any)?.(e);
            }}
            value={field?.value || select || ""}
            {...field}
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
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "200px",
                }}
                key={option.value}
                value={option.value}
              >
                {option.label} 
                {option.value === select && (
                   <TickIcon className="tick-icon" />
                )}
               
              </MenuItem>
            ))}
          </TextField>
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
    [props.id, props.label, props?.onChange, props.options, props.sx, select]
  );
  return (
    <>
      {props.control ? (
        <Controller
          control={props.control}
          name={props.name}
          render={({ field, fieldState: { error } }) =>
            selectComponent(field, error)
          }
        />
      ) : (
        selectComponent()
      )}
    </>
  );
};

export default SelectTheme;
