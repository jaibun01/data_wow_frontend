import { Box } from "@mui/material";
import HeadSearch from "../home/views/HeadSearch";
import ListOurBlog from "./views/ListOurBlog";
import ModalCreateBlog from "../blog/views/ModalCreateBlog";
import useCreateBlog from "../blog/hooks/useCreateBlog";
import { IDataBlog, IDataCommunity } from "../blog/interfaces";
import useOurBlog from "./hooks/useOurBlog";
import ModalDelete from "./views/modal-delete";

const OurBlog = () => {
  const { setFilter, data, mutate } = useOurBlog();
  const {
    openModelCreate,
    setOpenModelCreate,
    onSubmit,
    methods,
    community,
    loadingForm,
    openModelDelete,
    setOpenModelDelete,
    onDelete,
  } = useCreateBlog({ refreshMyBlog: mutate });
  return (
    <>
      <Box sx={{ my: "35px" }}>
        <HeadSearch
          setOpenModelCreate={setOpenModelCreate}
          setFilter={setFilter}
          community={community as IDataCommunity[]}
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
        <ModalDelete
          openModelDelete={openModelDelete}
          setOpenModelDelete={setOpenModelDelete}
          handelDelete={onDelete}
          loadingForm={loadingForm}
        />
        <ListOurBlog
          list={data as IDataBlog[]}
          setOpenModalCreate={setOpenModelCreate}
          setOpenModalDelete={setOpenModelDelete}
        />
      </Box>
    </>
  );
};

export default OurBlog;
