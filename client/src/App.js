import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
import Form from "./components/Form/Form";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>App</h1>
      <Login />
      <Feed />
      <Form />
    </div>
  );
}
