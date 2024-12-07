import InputTheme from "@/components/form-hook/InputTheme";
import SelectTheme from "@/components/form-hook/SelectTheme";
import ButtonTheme from "@/components/common/Button";
import SearchIcon from "@/components/icons/SearchIcon";
import { Box } from "@mui/material";
import { IDataBlog, IDataCommunity } from "@/features/blog/interfaces";
interface IProps {
  setOpenModelCreate: React.Dispatch<React.SetStateAction<boolean | IDataBlog>>;
  community: IDataCommunity[];
  setFilter: React.Dispatch<
    React.SetStateAction<{ search: string; community_id: string }>
  >;
}
const HeadSearch = ({ setOpenModelCreate, community, setFilter }: IProps) => {
  return (
    <Box
      sx={{
        display: { xs: "flex" },
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <InputTheme
        id="search"
        startIcon={<SearchIcon />}
        placeholder="Search"
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: "60%", lg: "70%" },
        }}
        name="search"
        onChange={(e) => {
          setFilter((prev) => ({ ...prev, search: e.target.value }));
        }}
      />

      {/* <IconButton onClick={() => setOpenSearch(!openSearch)}>
          <SearchIcon />
        </IconButton> */}
      <Box
        sx={{
          ml: "auto",
          display: "flex",
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
