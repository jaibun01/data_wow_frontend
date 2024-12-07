"use client";
import CardBlog from "@/components/common/CardBlog";
import { IDataBlog } from "@/features/blog/interfaces";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
interface IProps {
  list: IDataBlog[];
}
const Post = ({ list }: IProps) => {
  const router = useRouter();
  return (
    <Box
      component={"section"}
      className="bg-white rounded-[12px] px-[20px] pb-[20px] mt-[35px]"
    >
      {/* <Card sx={{ maxWidth: 345 }}> */}
      {list?.length > 0 ? (
        list?.map((item) => {
          return (
            <Box
              key={item._id}
              component={"article"}
              className="border-b-[0.5px] border-grey-100 py-[22px] cursor-pointer"
              onClick={() => {
                router.push(`/blog/${item._id}`);
              }}
            >
              <CardBlog
                name={item.user_id.username}
                title={item.title}
                badge={item.community_id.title}
                description={item.description}
                comment={10}
              />
            </Box>
          );
        })
      ) : (
        <Typography sx={{ textAlign: "center", py: 5 }}>No Data</Typography>
      )}
    </Box>
  );
};

export default Post;
