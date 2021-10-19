import React from "react";
import "./Post.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
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

        <div className="postOption">
          <NearMe />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
