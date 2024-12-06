"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import HeadSearch from "./views/HeadSearch";
import ModalCreateBlog from "../blog/views/ModalCreateBlog";
import useCreateBlog from "../blog/hooks/useCreateBlog";
const Home = () => {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down("sm"));
  console.log("downSM", downSM);
  const { openModelCreate, setOpenModelCreate, onSubmit, methods } =
    useCreateBlog();
  //   const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <Box sx={{ my: "35px" }}>
        <HeadSearch setOpenModelCreate={setOpenModelCreate} />
        <ModalCreateBlog
          openModelCreate={openModelCreate}
          setOpenModelCreate={setOpenModelCreate}
          handleSubmit={methods.handleSubmit}
          control={methods.control}
          onSubmit={onSubmit}
        />
      </Box>
    </>
  );
};

export default Home;
