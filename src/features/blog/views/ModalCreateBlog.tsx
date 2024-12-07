"use client";
import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Control, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import { IFormValues } from "../hooks/useCreateBlog";
import InputTheme from "@/components/form-hook/InputTheme";
import SelectTheme from "@/components/form-hook/SelectTheme";
import { Inter } from "next/font/google";
import ButtonTheme from "@/components/common/Button";
import { IDataBlog, IDataCommunity } from "../interfaces";
const inter = Inter({ subsets: ["latin"] });
interface IProps {
  openModelCreate: boolean | IDataBlog;
  setOpenModelCreate: React.Dispatch<React.SetStateAction<boolean | IDataBlog>>;
  handleSubmit: UseFormHandleSubmit<IFormValues>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, any>;
  onSubmit: SubmitHandler<IFormValues>;
  loadingForm?: boolean;
  community?: IDataCommunity[];
}
const ModalCreateBlog = ({
  openModelCreate,
  setOpenModelCreate,
  handleSubmit,
  control,
  onSubmit,
  loadingForm,
  community,
}: IProps) => {
  return (
    <>
      <Dialog
        open={Boolean(openModelCreate)}
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
              {typeof openModelCreate != 'boolean' ? "Edit" : "Create"} Post
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
                  options={
                    community?.map((item) => ({
                      value: item._id,
                      label: item.title,
                    })) || []
                  }
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
              <ButtonTheme
                disabled={loadingForm}
                label={"Post"}
                type="submit"
                startIcon={
                  loadingForm ? (
                    <CircularProgress
                      size={20}
                      sx={{ color: "var(--white)" }}
                    />
                  ) : null
                }
              />
            </Box>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default ModalCreateBlog;
