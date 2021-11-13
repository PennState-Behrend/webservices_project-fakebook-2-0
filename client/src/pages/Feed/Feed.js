import React from "react";
import { useSelector } from "react-redux";
import "./Feed.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Post from "./Post";
import PostForm from "../../components/Form/Form";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Feed() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <Box sx={{ flexGrow: 1, paddingTop: "-50vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <PostForm />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          {posts.map((post) => (
            <Post
              key={post._id}
              // profilePic={post.data.profilePic}
              message={post.body}
              timestamp={new Date()}
              username={post.creator}
              likeCount={post.likeCount}
              commentCount={post.commentCount}
              image={post.selectedFile}
            />
          ))}
        </Grid>
        <Grid item xs={2}></Grid>
        {/* <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
    </Box>
    // <div className="feed" style={{ paddingTop: "10vh" }}>
    //   {posts.map((post) => (
    //     <Post
    //       key={post._id}
    //       // profilePic={post.data.profilePic}
    //       message={post.body}
    //       timestamp={new Date()}
    //       username={post.creator}
    //       likeCount={post.likeCount}
    //       commentCount={post.commentCount}
    //       image={post.selectedFile}
    //     />
    //   ))}
    //   {/* <Post
    //         key='1'
    //         profilePic={arif}
    //         message='WOW this works!'
    //         timestamp='This is a timestamp'
    //         username='devarif'
    //         image={postImage}
    //     />
    //     <Post
    //         key='2'
    //         profilePic={arif}
    //         message='WOW this works!'
    //         timestamp='This is a timestamp'
    //         username='devarif'
    //     /> */}
    // </div>
  );
}
