import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";
import useStyles from "./styles";

export default function CommentSection({ post }) {
  console.log(post);
  const classes = useStyles();

  const [comments, setComments] = useState([1, 2, 3, 4]);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem("profile")).result;
  const dispatch = useDispatch();

  const handleClick = () => {
    constFinalComment = `${user.name}: ${comment}`;
    dispatch(commentPost(finalComment, post._id));
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              Comment {i}
            </Typography>
          ))}
          <div
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <Typography gutterBottom variant="h6" gutterBottom>
              Write a Comment
            </Typography>
            <div
              styles={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <TextField
                  fullWidth
                  rows={4}
                  variant="outlined"
                  label="Comment"
                  multiline
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>

              <div>
                <Button
                  style={{ marginTop: "10px" }}
                  fullWidth
                  disabled={!comment}
                  color="primary"
                  variant="contained"
                  onClick={handleClick}
                >
                  Comment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
