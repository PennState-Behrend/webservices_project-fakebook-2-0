import React from "react";
import { useSelector } from "react-redux";
import "./Feed.css";
import Post from "./Post";

export default function Feed() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <div className="feed">
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
      {/* <Post 
            key='1'
            profilePic={arif}
            message='WOW this works!'
            timestamp='This is a timestamp'
            username='devarif'
            image={postImage}
        />
        <Post 
            key='2'
            profilePic={arif}
            message='WOW this works!'
            timestamp='This is a timestamp'
            username='devarif'
        /> */}
    </div>
  );
}
