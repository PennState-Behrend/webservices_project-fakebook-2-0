import React from "react";
import "./Post.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { deepOrange, deepPurple } from "@mui/material/colors";

import Moment from "react-moment";

import MoreVertIcon from "@mui/icons-material/MoreVert";

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="post">
      <div className="postTop">
        {/* <Avatar src={profilePic} className="postAvatar" /> */}
        <div>
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="inherit"
          >
            <MoreVertIcon color="error" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
        </div>
        <Avatar sx={{ bgcolor: "#FFFFFF" }} style={{ marginRight: 5 }}>
          {username[0].toUpperCase()}
        </Avatar>

        <div className="postTopInfo">
          <h2>{username}</h2>
          <p>
            <Moment fromNow>{timestamp}</Moment>
          </p>
        </div>
      </div>

      <div className="postBottom">
        <p style={{ marginTop: -20, fontSize: 20 }}>{message}</p>
      </div>

      <div className="postImage">
        <img
          src={image}
          alt=""
          width="100%"
          maxHeight="auto"
          style={{ objectFit: "contain" }}
        />
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
      </div>
    </div>
  );
};

export default Post;
