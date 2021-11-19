import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
import Form from "./components/Form/Form";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timeline from "./pages/Timeline/Timeline";

export default function App() {
  const dispatch = useDispatch();
  const user = false;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Router>
      {/* <Form />

      <Feed /> */}
      {user ? (
        <>
          <NavBar />

          <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/timeline/:id" component={Timeline} />
          </Switch>
        </>
      ) : (
        <Login />
      )}
    </Router>
  );
}
