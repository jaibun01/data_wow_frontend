import { Avatar, Box, CardHeader, IconButton, Typography } from "@mui/material";
import BadgeTheme from "./BadgeTheme";
import { Inter } from "next/font/google";
import CommentIcon from "../icons/CommentIcon";
import PencilIcon from "../icons/PencilIcon";
import TrashIcon from "../icons/TrashIcon";
const inter = Inter({ subsets: ["latin"] });
interface IProps {
  name: string;
  time?: string;
  title: string;
  badge: string;
  description: string;
  comment: number;
  page?: "post" | "detail";
  edit?: boolean;
  handleDelete?: () => void;
  handleEdit?: () => void;
}
const CardBlog = ({ page = "post", edit, ...props }: IProps) => {
  return (
    <>
      <CardHeader
        sx={{ p: 0, mb: "15px", fontSize: "16px", fontWeight: 600 }}
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
        action={
          edit && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  props?.handleEdit?.();
                }}
              >
                <PencilIcon />
              </IconButton>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  props?.handleDelete?.();
                }}
              >
                <TrashIcon />
              </IconButton>
            </Box>
          )
        }
        // subheader="September 14, 2016"
      />
      <BadgeTheme label={props.badge} />
      {/* </Card> */}
      <Typography
        variant="h3"
        className={`${inter.className}`}
        sx={{
          mt: page === "post" ? "10px" : "16px",
          mb: page === "post" ? "10px" : "16px",
          fontWeight: 600,
          lineHeight: "24px",
          fontSize: page === "post" ? "16px" : "28px",
          color: "var(--black-100)",
          fontFamily: `${inter.style.fontFamily} !important`,
        }}
      >
        {props.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mt: "5px",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "15px",
          color: "var(--black-100)",
          fontFamily: `${inter.style.fontFamily} !important`,
        }}
      >
        {props.description}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mt: page === "post" ? "10px" : "28px",
          fontWeight: 400,
          fontSize: "12px",
          color: "var(--grey-300)",
          display: "flex",
          alignItems: "center",
          gap: 1,
          fontFamily: `${inter.style.fontFamily} !important`,
        }}
      >
        <CommentIcon />
        {props.comment} Comments
      </Typography>
    </>
  );
};
export default CardBlog;
