"use client";
import ButtonTheme from "@/components/common/Button";
import CardBlog from "@/components/common/CardBlog";
import CardComment from "@/components/common/CardComment";
import FormComment from "@/features/form-comment";
import useFormComment from "../form-comment/hooks/useFormComment";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

// Extend dayjs with the duration plugin
dayjs.extend(duration);
const BlogDetailPage = () => {
  const {
    methods: { handleSubmit, control },
    onSubmit,
    handleOpenComment,
    openComment,
    blog,
    showTime,
    comments,
  } = useFormComment();

  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <CardBlog
        name={blog?.user_id?.username || ""}
        time={`${showTime} ago`}
        title={blog?.title || ""}
        badge={blog?.community_id?.title || ""}
        description={blog?.description || ""}
        comment={blog.comments || 0}
        page="detail"
      />
      {!openComment && (
        <ButtonTheme
          label={"Add Comments"}
          sx={{ mt: "42px", mb: "34px" }}
          theme="outline"
          onClick={handleOpenComment}
        />
      )}

      {openComment && (
        <FormComment
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
          handleOpenComment={handleOpenComment}
        />
      )}

      {comments && comments?.length > 0 ? (
        comments?.map((item) => {
          const x = dayjs();
          const y = dayjs(item.createdAt);
          const durations = dayjs.duration(x.diff(y));
          const showTime =
            durations.asHours() > 1
              ? `${durations.asHours()?.toFixed(0)}h`
              : durations.asHours() > 24
              ? `${durations.asDays()?.toFixed(0)}d`
              : `${durations.asMinutes()?.toFixed(0)}m`;
          return (
            <CardComment
              key={item._id}
              name={item.user_id.username}
              time={`${showTime} ago`}
              description={item.content}
            />
          );
        })
      ) : (
        <Typography>No comments</Typography>
      )}
    </>
  );
};

export default BlogDetailPage;
