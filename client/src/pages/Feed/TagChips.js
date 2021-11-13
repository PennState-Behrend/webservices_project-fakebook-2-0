import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { Container } from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function TagChips({ tags }) {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        marginBottom: "-20px",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {tags?.map((data) => {
        if (data == "") return <div key={data}></div>;
        return (
          <ListItem key={data}>
            <Chip
              icon={<TagIcon style={{ color: "red" }} />}
              label={<h6>{data.toUpperCase()}</h6>}
              // onDelete={data.label === "React" ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Container>
  );
}
