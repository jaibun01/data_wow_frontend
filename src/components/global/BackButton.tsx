"use client";
import { Box, SxProps } from "@mui/material";
import ArrowNextIcon from "../icons/ArrowNextIcon";
import { useRouter } from "next/navigation";
interface IProps {
  sx?: SxProps;
}
const BackButton = ({ ...props }: IProps) => {
  const router = useRouter();
  return (
    <Box
      onClick={() => router.back()}
      component={"button"}
      sx={{
        ...props.sx,
      }}
      className={`bg-green-100 w-[44px] h-[44px] rounded-full flex items-center justify-center`}
    >
      <ArrowNextIcon stroke="rgba(36, 56, 49, 1)" className="rotate-180" />
    </Box>
  );
};

export default BackButton;
