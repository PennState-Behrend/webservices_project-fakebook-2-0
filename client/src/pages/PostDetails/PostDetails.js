import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import CommentSection from "./CommentSection";

import { useParams, useHistory } from "react-router-dom";

import useStyles from "./styles";
import { getPost } from "../../actions/posts";

export default function PostDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const { post, posts, isLoading } = useSelector((state) => {
    console.log(state);
    return state.posts;
  });

  useEffect(() => {
    dispatch(getPost(id));
    console.log(post);
  }, [id]);

  if (!post) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.body}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>

          <Typography variant="h6">
            Created by:{" "}
            <Link to={`/timeline/${post.creator}`}>{post.name}</Link>
          </Typography>

          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>

          <Divider style={{ margin: "20px 0" }} />
          <CommentSection post={post} />
          <Divider style={{ margin: "20px 0" }} />
        </div>
        {post.selectedFile ? (
          <div className={classes.imageSection}>
            <img
              className={classes.media}
              src={post.selectedFile}
              alt={post.title}
            />
          </div>
        ) : null}
      </div>
    </Paper>
  );
}
