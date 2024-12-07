import { Box } from "@mui/material";
import HeadSearch from "../home/views/HeadSearch";
import useOurBlog from "./hooks/useOurBlog";
import ListOurBlog from "./views/ListOurBlog";
import ModalCreateBlog from "../blog/views/ModalCreateBlog";
import useCreateBlog from "../blog/hooks/useCreateBlog";

const OurBlog = () => {
  const { openModelCreate, setOpenModelCreate, onSubmit, methods } =
    useCreateBlog();
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
        <ListOurBlog />
      </Box>
    </>
  );
};

export default OurBlog;
