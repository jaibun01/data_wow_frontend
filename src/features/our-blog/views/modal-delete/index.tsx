import ButtonTheme from "@/components/common/Button";
import { IDataBlog } from "@/features/blog/interfaces";
import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
interface IProps {
  openModelDelete: boolean | IDataBlog;
  setOpenModelDelete: React.Dispatch<React.SetStateAction<boolean | IDataBlog>>;
  loadingForm?: boolean;
  handelDelete?: () => void;
}
const ModalDelete = ({
  openModelDelete,
  setOpenModelDelete,
  loadingForm,
  handelDelete,
}: IProps) => {
  return (
    <Dialog
      open={Boolean(openModelDelete)}
      onClose={() => setOpenModelDelete(!openModelDelete)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogContent sx={{ maxWidth: "400px" }}>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            color: "var(--grey-600)",
            textAlign: "center",
            maxWidth: "287px",
            mx: "auto",
          }}
        >
          Please confirm if you wish to delete the post
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "var(--grey-600)",
            textAlign: "center",
            maxWidth: "340px",
            mt: 1,
            mx: "auto",
          }}
        >
          Are you sure you want to delete the post? Once deleted, it cannot be
          recovered.
        </Typography>
        <Box
          sx={{
            display: { md: "flex" },
            alignItems: "center",
            gap: 2,
            justifyContent: "center",
            mt: 2,
          }}
        >
          <ButtonTheme
            label={"Cancel"}
            theme="outline_grey"
            fullWidth
            onClick={() => setOpenModelDelete(!openModelDelete)}
          />
          <ButtonTheme
            onClick={handelDelete}
            disabled={loadingForm}
            label={"Delete"}
            theme="red_fill"
            fullWidth
            sx={{ mt: { md: 0, xs: 2 } }}
            startIcon={
              loadingForm ? (
                <CircularProgress size={20} sx={{ color: "var(--white)" }} />
              ) : null
            }
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDelete;
