import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
import Form from "./components/Form/Form";
import NavBar from "./components/Navbar/Navbar";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import Timeline from "./pages/Timeline/Timeline";
import decode from "jwt-decode";
import TokenChecker from "./components/Navbar/TokenChecker";

export default function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
    history.push("/");
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <>
      {/* <Form />

      <Feed /> */}

      {user ? (
        <>
          <NavBar signOut={logout} user={user?.result?.name} />

          <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/timeline/:id" component={Timeline} />
          </Switch>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
