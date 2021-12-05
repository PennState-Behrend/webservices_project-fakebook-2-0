import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function ProfileDetails({ user }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="auto"
    >
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        minHeight="auto"
      >
        <Avatar
          sx={{
            bgcolor: deepOrange[500],
            width: 300,
            height: 300,
            padding: 25,
          }}
        >
          <Typography style={{ fontSize: "250px" }}>
            {user?.name[0].toUpperCase()}
          </Typography>
        </Avatar>
        {/* <Typography variant="h6" bold>
          Account Created: {new Date().getUTCDate()}
        </Typography> */}
        <Typography variant="h3" bold style={{ marginTop: "30px" }}>
          <strong>{user?.name}</strong>
        </Typography>

        <Box
          display="flex"
          alignItems="space-between"
          minHeight="auto"
          minWidth="100%"
          marginTop="20px"
          justifyContent="space-between"
        >
          <Typography variant="h5">
            Posts: <strong>{user?.info.posts}</strong>
          </Typography>
          <Typography variant="h5">
            Likes: <strong>{user?.info.likes}</strong>
          </Typography>
          <Typography variant="h5">
            Comments: <strong>{user?.info.comments}</strong>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
