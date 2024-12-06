import { Chip, ChipOwnProps } from "@mui/material";

type IProps = ChipOwnProps;
const BadgeTheme = ({ ...props }: IProps) => {
  // MuiBadge-badge
  return (
    <Chip
      label={props.label}
      sx={{
        position: "unset !important",
        backgroundColor: "var(--grey-200)",
        color: "var(--grey-400)",
        fontSize: "12px",
        fontFamily: "IBMPlexSans Regular !important",
        textTransform: "capitalize",
      }}
    />
    // <Chip
    //   badgeContent={props.badgeContent}
    //   color={"info"}
    //   sx={{
    //     "& .MuiBadge-badge": {
    //       position: "unset !important",
    //       backgroundColor: "var(--grey-200)",
    //       color: "var(--grey-400)",
    //       fontSize: "12px",
    //       fontFamily: "IBMPlexSans Regular !important",
    //       textTransform: "capitalize",
    //     },
    //   }}
    // />
  );
};

export default BadgeTheme;
