import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Timeline() {
  let { id } = useParams();
  console.log(id);
  return (
    <Box
      sx={{ flexGrow: 1, overflow: "hidden" }}
      style={{ marginTop: "-30px" }}
    >
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Item>adwadawdawdawdwaawdwa</Item>
        </Grid>
        <Grid item xs={8}>
          <Item style={{ maxHeight: "100%", overflow: "auto" }}>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
            <List>...</List>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
