import { Button, ButtonProps } from "@mui/material";
interface IProps extends ButtonProps {
  label: string;
  theme?: "outline" | "fill" | "outline_grey" | "red_fill";
}
const ButtonTheme = ({ label, theme = "fill", ...props }: IProps) => {
  return (
    <Button
      disabled={props.disabled}
      fullWidth={props.fullWidth || false}
      variant={props.variant || "contained"}
      size={props.size || "small"}
      className="IBMPlexSans-SemiBold text-sm !capitalize !px-[29.5px]"
      onClick={props.onClick}
      type={props.type || "button"}
      startIcon={props.startIcon || null}
      endIcon={props.endIcon || null}
      sx={{
        backgroundColor: `${
          theme?.includes("outline")
            ? "var(--white)"
            : theme === "red_fill"
            ? "var(--red-500)"
            : "var(--success)"
        }`,
        border:
          theme === "outline"
            ? `1px solid var(--success)`
            : theme === "outline_grey"
            ? `1px solid var(--grey-300)`
            : `0px`,
        color:
          theme === "outline"
            ? "var(--success)"
            : theme === "red_fill"
            ? "var(--white)"
            : theme === "outline_grey"
            ? "var(--grey-300)"
            : "var(--white)",
        borderRadius: "8px",
        height: "40px",
        minWidth: "fit-content",
        ...props.sx,
      }}
    >
      {label}
    </Button>
  );
};

export default ButtonTheme;
