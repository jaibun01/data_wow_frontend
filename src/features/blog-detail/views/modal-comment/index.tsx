import FormComment from "@/features/form-comment";
import { InputsFomrComment } from "@/features/form-comment/hooks/useFormComment";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import { Control, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
interface IProps {
  openModal: boolean;
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: UseFormHandleSubmit<InputsFomrComment>;
  onSubmit: SubmitHandler<InputsFomrComment>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any, any>;
}
const ModalComment = ({
  openModal,
  setOpenModel,
  control,
  onSubmit,
  handleSubmit,
}: IProps) => {
  return (
    <Dialog
      open={Boolean(openModal)}
      onClose={() => setOpenModel(!openModal)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogContent
        sx={{ width: { xs: "100%", sm: "312px" }, maxWidth: "312px" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "20px",
              fontFamily: `${inter.style.fontFamily} !important`,
            }}
          >
            Add Comments
          </Typography>
          <IconButton onClick={() => setOpenModel(!openModal)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <FormComment
          handleSubmit={handleSubmit}
          control={control}
          onSubmit={onSubmit}
          handleOpenComment={() => setOpenModel(!openModal)}
        />
      </DialogContent>
    </Dialog>
  );
};
export default ModalComment;
