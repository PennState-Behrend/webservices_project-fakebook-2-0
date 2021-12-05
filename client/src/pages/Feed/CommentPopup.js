import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDispatch } from "react-redux";
import { commentPost, getPosts } from "../../actions/posts";

import { ChatBubbleOutline } from "@material-ui/icons";
import { Typography, TextField, Button } from "@material-ui/core/";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CommentPopup({ id }) {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem("profile")).result;
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCommenting = async () => {
    const finalComment = `${user.name}: ${comment}`;
    console.log(finalComment);
    const newComments = await dispatch(commentPost(finalComment, id));
    dispatch(getPosts());
    handleClose();
  };

  return (
    <div>
      {/* <Button variant="outlined">Slide in alert dialog</Button> */}
      <ChatBubbleOutline
        fontSize="large"
        color="primary"
        onClick={handleClickOpen}
      ></ChatBubbleOutline>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Typography gutterBottom variant="h5" color="primary">
            {"Write a comment".toUpperCase()}
          </Typography>
          <TextField
            fullWidth
            rows={4}
            variant="outlined"
            label="Comment"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            // value={comment}
            //onChange={(e) => setComment(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCommenting}>Comment</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
