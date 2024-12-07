"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import HeadSearch from "./views/HeadSearch";
import useCreateBlog from "../blog/hooks/useCreateBlog";
import dynamic from "next/dynamic";
import { IDataBlog, IDataCommunity } from "../blog/interfaces";
const ModalCreateBlog = dynamic(() => import("../blog/views/ModalCreateBlog"), {
  ssr: false,
});

const Post = dynamic(() => import("@/features/home/views/blog-list"), {
  ssr: false,
});
const Home = () => {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down("sm"));
  console.log("downSM", downSM);
  const {
    data,
    openModelCreate,
    setOpenModelCreate,
    onSubmit,
    methods,
    loadingForm,
    community,
    setFilter,
  } = useCreateBlog({});
  //   const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <Box sx={{ my: "35px" }}>
        <HeadSearch
          setOpenModelCreate={setOpenModelCreate}
          community={community as IDataCommunity[]}
          setFilter={setFilter}
        />
        <ModalCreateBlog
          openModelCreate={openModelCreate}
          setOpenModelCreate={setOpenModelCreate}
          handleSubmit={methods.handleSubmit}
          control={methods.control}
          onSubmit={onSubmit}
          loadingForm={loadingForm}
          community={community}
        />
        <Post list={data as IDataBlog[]} />
      </Box>
    </>
  );
};

export default Home;
