import { Avatar, Box, CardHeader, Typography } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
interface IProps {
  name: string;
  time?: string;
  description: string;
}
const CardComment = ({ ...props }: IProps) => {
  return (
    <Box sx={{ width: "100%", mb: 2 }}>
      <CardHeader
        sx={{ p: 0, mb: "10px", fontSize: "16px", fontWeight: 600 }}
        avatar={<Avatar sx={{}} aria-label="recipe"></Avatar>}
        title={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="body1"
              className={`${inter.className}`}
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                fontFamily: `${inter.style.fontFamily} !important`,
              }}
            >
              {props.name}
            </Typography>

            {props.time && (
              <Typography
                variant="caption"
                sx={{
                  fontSize: "12px",
                  color: "var(--grey-300)",
                  ml: "10px",
                  fontFamily: `${inter.style.fontFamily} !important`,
                }}
              >
                {props.time}
              </Typography>
            )}
          </Box>
        } // {props.name}
      />
      <Typography
        variant="body2"
        sx={{
          color: "var(--text)",
          fontSize: "12px",
          lineHeight: "15px",
          ml: "55px",
          fontFamily: `${inter.style.fontFamily} !important`,
        }}
      >
        {props.description}
      </Typography>
    </Box>
  );
};
export default CardComment;
