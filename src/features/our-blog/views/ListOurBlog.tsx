import CardBlog from "@/components/common/CardBlog";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";

const ListOurBlog = () => {
  const router = useRouter();

  return (
    <Box
      component={"section"}
      className="bg-white rounded-[12px] px-[20px] pb-[20px] mt-[35px]"
    >
      {/* <Card sx={{ maxWidth: 345 }}> */}
      <Box
        component={"article"}
        className="border-b-[0.5px] border-grey-100 py-[22px] cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          router.push(`/blog/1`);
        }}
      >
        <CardBlog
          name={"Zach"}
          title={"The Big Short War"}
          badge={"History"}
          description={
            "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. “I would’ve lost it,” Ackman concedes. He got a 780 on the verbal and a 750 on the math. “One wrong on the verbal, three wrong on the math,” he muses. “I’m still convinced some of the questions were wrong.”"
          }
          comment={10}
          edit
          handleDelete={() => {}}
          handleEdit={() => {}}
        />
      </Box>
    </Box>
  );
};

export default ListOurBlog;
