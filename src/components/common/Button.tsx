import { Button, ButtonProps } from "@mui/material";
interface IProps extends ButtonProps {
  label: string;
  theme?: "outline" | "fill";
}
const ButtonTheme = ({ label, theme = "fill", ...props }: IProps) => {
  return (
    <Button
      fullWidth={props.fullWidth || false}
      variant={props.variant || "contained"}
      size={props.size || "small"}
      className="IBMPlexSans-SemiBold text-sm !capitalize !px-[29.5px]"
      onClick={props.onClick}
      type={props.type || "button"}
      sx={{
        backgroundColor: `${
          theme === "outline" ? "var(--white)" : "var(--success)"
        }`,
        border: theme === "outline" ? `1px solid var(--success)` : `0px`,
        color: theme === "outline" ? "var(--success)" : "var(--white)",
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
