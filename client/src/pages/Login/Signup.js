import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SignUpForm from "./SignupForm";

export default function SignUp({ onChangeHandler, onHandleSubmit, formData }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Button color="success" variant="contained" onClick={handleClickOpen}>
          Create New Account
        </Button>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Creating a new Account"}
        </DialogTitle>
        <DialogContent>
          <SignUpForm
            onHandleChange={onChangeHandler}
            onHandleSubmit={onHandleSubmit}
            formData={formData}
          />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            variant="contained"
            color="inherit"
          >
            cancel
          </Button>
          <Button
            onClick={onHandleSubmit}
            autoFocus
            variant="contained"
            type="submit"
            color="success"
          >
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
