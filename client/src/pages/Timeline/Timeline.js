import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Post from "../Feed/Post.js";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Timeline() {
  let { id } = useParams();

  const [posts, setPosts] = useState([]);

  console.log(id);
  return (
    <Box
      sx={{ flexGrow: 1, overflow: "hidden" }}
      style={{ marginTop: "-30px" }}
    >
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Item>{id}</Item>
        </Grid>
        <Grid item xs={8}>
          <Item style={{ maxHeight: "100%", overflow: "auto" }}>
            {posts?.map((post) => (
              <Post
                key={post._id}
                // profilePic={post.data.profilePic}
                message={post.body}
                timestamp={post.createdAt}
                creator={post.creator}
                username={post.name}
                likeCount={post.likes.length}
                likes={post.likes}
                id={post._id}
                commentCount={post.comments.length}
                image={post.selectedFile}
                tags={post.tags}
                // setCurrentId={setCurrentId}
              />
            ))}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
