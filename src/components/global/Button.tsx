import { Button, ButtonProps } from "@mui/material";
interface IProps extends ButtonProps {
  label: string;
}
const ButtonTheme = ({ label, ...props }: IProps) => {
  return (
    <Button
      variant={props.variant || "contained"}
      size={props.size || "small"}
      className="IBMPlexSans-SemiBold text-sm !capitalize !px-[29.5px]"
      sx={{
        backgroundColor: "var(--success)",
        color: "var(--white)",
        borderRadius: "8px",
        height: "40px",
        minWidth: 'max-content'
      }}
    >
      {label}
    </Button>
  );
};

export default ButtonTheme;
