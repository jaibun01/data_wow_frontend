"use client";
import ButtonTheme from "@/components/global/Button";
import CardBlog from "@/components/global/CardBlog";
import CardComment from "@/components/global/CardComment";
import FormComment from "@/features/form-comment";
import useFormComment from "../form-comment/hooks/useFormComment";
const BlogDetailPage = () => {
  const {
    methods: { handleSubmit, control },
    onSubmit,
    handleOpenComment,
    openComment,
  } = useFormComment();
  return (
    <>
      <CardBlog
        name={"Zach"}
        time="1d ago"
        title={"The Big Short War"}
        badge={"History"}
        description={
          "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”"
        }
        comment={10}
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

      <CardComment
        name={"Zach"}
        time="1d ago"
        description={
          "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong."
        }
      />
    </>
  );
};

export default BlogDetailPage;
