import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import List from "@mui/material/List";
import ProfileDetails from "./ProfileDetails";

import Post from "../Feed/Post.js";
import { getUserPosts } from "../../actions/posts.js";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Timeline() {
  let { id } = useParams();

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [doneLoading, setDoneLoading] = useState("Loading...");
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    console.log("HERE");
    getPosts();
  }, [id, dispatch]);

  const getPosts = async () => {
    const userPosts = await dispatch(getUserPosts(id));
    setPosts(userPosts.post);
    setUser(userPosts.user);

    userPosts.length == 0 ?? setDoneLoading("No posts made");
  };

  console.log(id);
  return (
    <Box
      sx={{ flexGrow: 1, overflow: "hidden" }}
      style={{
        marginTop: "-30px",
        background: "AliceBlue",
        paddingLeft: "100px",
        paddingRight: "100px",
        paddingTop: "30px",
      }}
    >
      <Grid container spacing={8}>
        <Grid item xs={4}>
          {/* <Item>{id}</Item> */}
          <Item>
            <ProfileDetails user={user} />
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item style={{ maxHeight: "auto", overflow: "auto" }}>
            {posts.length >= 1 ? (
              posts.map((post) => (
                <List key={post._id}>
                  <Post
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
                    hide={true}
                    // setCurrentId={setCurrentId}
                  />
                </List>
              ))
            ) : (
              <h1>{doneLoading}</h1>
            )}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
