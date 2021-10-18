import React from "react";
import { useSelector } from "react-redux";

export default function Feed() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return <div></div>;
}
