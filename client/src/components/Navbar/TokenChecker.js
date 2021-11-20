import React, { useEffect } from "react";
import decode from "jwt-decode";
import { useLocation } from "react-router-dom";

export default function TokenChecker({ user, logout }) {
  //   useEffect(() => {
  //     const token = user?.token;
  //     const loc = useLocation();

  //     if (token) {
  //       const decodedToken = decode(token);
  //       if (decodedToken.exp * 1000 < new Date().getTime()) {
  //         logout();
  //       }
  //     }
  //   }, [loc]);

  return <></>;
}
