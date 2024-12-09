import InputTheme from "@/components/form-hook/InputTheme";
import SelectTheme from "@/components/form-hook/SelectTheme";
import ButtonTheme from "@/components/common/Button";
import SearchIcon from "@/components/icons/SearchIcon";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { IDataBlog, IDataCommunity } from "@/features/blog/interfaces";
import { useMemo, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
interface IProps {
  setOpenModelCreate: React.Dispatch<React.SetStateAction<boolean | IDataBlog>>;
  community: IDataCommunity[];
  setFilter: React.Dispatch<
    React.SetStateAction<{ search: string; community_id: string }>
  >;
}
const HeadSearch = ({ setOpenModelCreate, community, setFilter }: IProps) => {
  const [openSearch, setOpenSearch] = useState(false);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  const inputSearch = useMemo(() => {
    return (
      <InputTheme
        id="search"
        startIcon={<SearchIcon />}
        placeholder="Search"
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: "70%", lg: "75%", xl: "80%" },
        }}
        endIcon={
          openSearch && (
            <IconButton onClick={() => setOpenSearch(!openSearch)}>
              <CloseIcon />
            </IconButton>
          )
        }
        name="search"
        onChange={(e) => {
          setFilter((prev) => ({ ...prev, search: e.target.value }));
        }}
      />
    );
  }, [openSearch, setFilter]);

  return (
    <Box
      sx={{
        display: { xs: "flex" },
        alignItems: "center",
        flexWrap: { xs: openSearch ? "wrap" : "nowrap" }, //"wrap",
        gap: 2,
      }}
    >
      {!downMd && inputSearch}
      {openSearch && downMd && inputSearch}
      {/* {inputSearch} */}
      {downMd && !openSearch && (
        <IconButton onClick={() => setOpenSearch(!openSearch)}>
          <SearchIcon />
        </IconButton>
      )}

      <Box
        sx={{
          ml: "auto",
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          flexWrap: { md: "nowrap", xs: "wrap" },
          width: { xs: "100%", md: "auto" },
        }}
      >
        <SelectTheme
          label="Community"
          id="select_community"
          options={[
            { label: "All", value: "" },
            ...(community?.map((item) => ({
              value: item._id,
              label: item.title,
            })) || []),
          ]}
          sx={{ width: { xs: "200px", md: "100%" } }}
          name="community"
          onChange={(e) => {
            setFilter((prev) => ({
              ...prev,
              community_id: e.target.value as string,
            }));
          }}
        />
        <ButtonTheme
          label="Create +"
          onClick={() => setOpenModelCreate(true)}
        />
      </Box>
    </Box>
  );
};

export default HeadSearch;
