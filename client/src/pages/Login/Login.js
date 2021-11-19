import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { AccountCircle, LockRounded } from "@material-ui/icons";

import "./Style.css";
import { typography } from "@mui/system";
import FakebookLogo from "../../images/fakebooklogo.svg";
import smallLogo from "../../images/smallLogo.png";

import SignUp from "./Signup";
import { InputAdornment } from "@mui/material";
import { useTheme, useMediaQuery } from "@material-ui/core";

const initalState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Login() {
  const theme = useTheme();
  const showTextLogo = useMediaQuery(theme.breakpoints.up("md"));

  const [formData, setFormData] = useState(initalState);

  const handleLogin = () => {
    console.log(formData);
  };

  const handleSignup = () => {
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Grid container style={{ minHeight: "100%" }}>
        {showTextLogo && (
          <Grid
            item
            xs={12}
            sm={6}
            alignItems="right"
            justify="right"
            justify="space-between"
          >
            <img
              src={FakebookLogo}
              style={{
                width: "80%",
                maxWidth: "80%",
                objectFit: "cover",
                marginTop: "30%",
              }}
              alt="Logo"
            />
          </Grid>
        )}
        <Grid
          container
          item
          xs={12}
          sm={6}
          style={{ padding: 10, marginTop: "10%" }}
          alignItems="center"
          direction="column"
          justifyContent="center"
          justify="space-between"
        >
          <div />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: showTextLogo ? 400 : 300,
              minWidth: showTextLogo ? 400 : 300,
            }}
          >
            <Grid container justifyContent="center">
              <img src={smallLogo} style={{ width: "200px" }} alt="logo" />
            </Grid>
            <TextField
              label="Email"
              name="email"
              onChange={handleChange}
              margin="normal"
              placeholder="Enter Email"
              type="email"
              size="large"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              margin="normal"
              type="password"
              onChange={handleChange}
              name="password"
              placeholder="Enter Password"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ height: 20 }} />
            <Button color="primary" variant="contained" onClick={handleLogin}>
              Log In
            </Button>
            <div style={{ height: 30 }} />

            <div style={{ height: "200px", width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SignUp
                  onChangeHandler={handleChange}
                  onHandleSubmit={handleSignup}
                  formData={formData}
                />
              </div>
            </div>
          </div>
        </Grid>
        <div />
        <Grid
          container
          alignItems="center"
          direction="column"
          justifyContent="center"
          justify="space-between"
          padding="40px"
        >
          <Grid item>
            <Typography variant="h5" textAlign="center">
              Connect with friends and the world around you on Fa
              <strong>k</strong>ebook.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

{
  /* <Box
sx={{ flexGrow: 1 }}
classes={{ root: { width: "100%", height: "100%" } }}
>
<Grid container spacing={2} whiteSpace={false}>
  <Grid item xs={8}>
    <Item>
      <img src={FakebookLogo} alt="Fakebook logo" width="300px" />
      <typography>
        <br />
        Connect with friends and the <br />
        world around you on Fa<strong>k</strong>ebook.
      </typography>
    </Item>
  </Grid>
  <Grid item xs={4}>
    <Item>
      <LoginForm />
    </Item>
  </Grid>
</Grid>
</Box> */
}
