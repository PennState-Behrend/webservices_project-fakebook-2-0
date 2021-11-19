import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const SignUpForm = ({ onHandleChange, formData }) => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={formData.firstName}
        name="firstName"
        onChange={onHandleChange}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={formData.lastName}
        name="lastName"
        onChange={onHandleChange}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        value={formData.email}
        required
        name="email"
        onChange={onHandleChange}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        value={formData.password}
        required
        name="password"
        onChange={onHandleChange}
      />
      <TextField
        label="Confirm Password"
        variant="filled"
        type="password"
        value={formData.confirmPassword}
        required
        name="confirmPassword"
        onChange={onHandleChange}
      />
    </form>
  );
};

export default SignUpForm;
