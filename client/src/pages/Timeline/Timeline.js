import React from "react";
import { useParams } from "react-router-dom";

export default function Timeline() {
  let { id } = useParams();
  console.log(id);
  return (
    <div style={{ margin: 200 }}>
      <h1>{id}</h1>
    </div>
  );
}
