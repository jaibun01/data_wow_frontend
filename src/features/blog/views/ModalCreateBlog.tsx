import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Control, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import { IFormValues } from "../hooks/useCreateBlog";
import InputTheme from "@/components/form-hook/InputTheme";
import SelectTheme from "@/components/form-hook/SelectTheme";
import { Inter } from "next/font/google";
import ButtonTheme from "@/components/common/Button";
const inter = Inter({ subsets: ["latin"] });
interface IProps {
  openModelCreate: boolean;
  setOpenModelCreate: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: UseFormHandleSubmit<IFormValues>;
  control: Control<any, any>;
  onSubmit: SubmitHandler<IFormValues>;
}
const ModalCreateBlog = ({
  openModelCreate,
  setOpenModelCreate,
  handleSubmit,
  control,
  onSubmit,
}: IProps) => {
    
  return (
    <>
      <Dialog
        open={openModelCreate}
        onClose={() => setOpenModelCreate(!openModelCreate)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle
            sx={{
              m: 0,
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            id="customized-dialog-title"
          >
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: 600,
                fontFamily: inter.style.fontFamily,
              }}
            >
              Create Post
            </Typography>

            <IconButton onClick={() => setOpenModelCreate(!openModelCreate)}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100%",
                minWidth: { xs: "100%", sm: "300px", md: "500px" },
                mb: 2,
              }}
            >
              <div>
                <SelectTheme
                  label="Community"
                  id="select_community"
                  name="community"
                  control={control}
                  options={[
                    { label: "All", value: "all" },
                    { label: "Alls", value: "alls" },
                  ]}
                  sx={{
                    width: { xs: "200px", md: "100%" },
                    "& .MuiSelect-icon": {
                      color: "var(--success)", // Custom color for the arrow
                    },
                    "& .MuiOutlinedInput-root": {
                      "& .MuiSelect-select": {
                        color: "var(--success)",
                      },
                      "& fieldset": {
                        borderColor: "var(--success)", // Default border color
                      },
                      "&:hover fieldset": {
                        borderColor: "var(--success)", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "var(--success)", // Border color when focused
                      },
                    },
                  }}
                />
              </div>
              <div>
                <InputTheme
                  fullWidth
                  id="title"
                  placeholder="Title"
                  sx={{
                    width: "100%",
                  }}
                  name="title"
                  control={control}
                />
              </div>
              <div>
                <InputTheme
                  fullWidth
                  id="description"
                  placeholder="What’s on your mind..."
                  sx={{
                    width: "100%",
                    "&  textarea": {
                      height: "234px !important",
                    },
                  }}
                  name="description"
                  control={control}
                  maxRows={4}
                  multiline
                />
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "end",
                mt: 2,
              }}
            >
              <ButtonTheme
                label={"Cancel"}
                theme="outline"
                onClick={() => setOpenModelCreate(!openModelCreate)}
              />
              <ButtonTheme label={"Post"} type="submit" />
            </Box>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default ModalCreateBlog;
