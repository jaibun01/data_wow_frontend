import InputTheme from "@/components/form-hook/InputTheme";
import SelectTheme from "@/components/form-hook/SelectTheme";
import ButtonTheme from "@/components/global/Button";
import SearchIcon from "@/components/icons/SearchIcon";
import { Box } from "@mui/material";
interface IProps {
  setOpenModelCreate: React.Dispatch<React.SetStateAction<boolean>>;
}
const HeadSearch = ({ setOpenModelCreate }: IProps) => {
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
            { label: "All", value: "all" },
            { label: "Alls", value: "alls" },
          ]}
          sx={{ width: { xs: "200px", md: "100%" } }}
          name="community"
        />
        <ButtonTheme label="Create +" onClick={() => setOpenModelCreate(true)} />
      </Box>
    </Box>
  );
};

export default HeadSearch;
