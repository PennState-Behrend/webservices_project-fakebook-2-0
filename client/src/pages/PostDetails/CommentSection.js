import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core/";

import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";
import useStyles from "./styles";

export default function CommentSection({ post }) {
  const classes = useStyles();

  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem("profile")).result;
  const dispatch = useDispatch();
  const commentRef = useRef();

  const handleComment = async () => {
    const finalComment = `${user.name}: ${comment}`;
    const newComments = await dispatch(commentPost(finalComment, post._id));
    setComment("");
    setComments(newComments);

    commentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <Typography gutterBottom variant="h5" color="primary">
          Comments
        </Typography>
        <div className={classes.commentsInnerContainer}>
          {comments?.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong>{c.split(": ")[0]}</strong>
              {c.split(":")[1]}
            </Typography>
          ))}
          <div ref={commentRef} />
        </div>
        <div style={{ width: "100%" }}>
          <Typography gutterBottom variant="h5" color="primary">
            Write a comment
          </Typography>
          <TextField
            fullWidth
            rows={4}
            variant="outlined"
            label="Comment"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br />
          <Button
            style={{ marginTop: "10px" }}
            fullWidth
            disabled={!comment.length}
            color="primary"
            variant="contained"
            onClick={handleComment}
          >
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
}
