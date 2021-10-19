import React from "react";
import "./Post.css";

// Icons
import { Avatar } from "@material-ui/core";
import {
  ThumbUp,
  ChatBubbleOutline,
  AccountCircle,
  NearMe,
  ExpandMoreOutlined,
} from "@material-ui/icons";

const Post = ({
  image,
  username,
  timestamp,
  message,
  commentCount,
  likeCount,
}) => {
  return (
    <div className="post">
      <div className="postTop">
        {/* <Avatar src={profilePic} className="postAvatar" /> */}
        <AccountCircle />
        <div className="postTopInfo">
          <h3>{username}</h3>
          {/* <p>time</p> */}
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
        </div>
      </div>

      <div className="postBottom">
        <p>{message}</p>
      </div>

      <div className="postImage">
        <img src={image} alt="" width="100" height="400" />
      </div>

      <div className="postOptions">
        <div className="postOption">
          <ThumbUp />
          <p>{likeCount} Like</p>
        </div>

        <div className="postOption">
          <ChatBubbleOutline />
          <p>{commentCount} Comment</p>
        </div>

        <div className="postOption">
          <NearMe />
          <p>Share</p>
        </div>

        <div className="postOption">
          <AccountCircle />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
};

export default Post;
