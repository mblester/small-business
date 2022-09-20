import React from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import cookie from "cookie";
import Home from "./containers/Home";
// import About from "./components/About";
import Login from "./containers/Login";
import Add from "./containers/AddListing";
import Details from "./containers/Details";

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
export const checkAuth = () => {
  let cookieObj = cookie.parse(document.cookie);
  let cookieBool = cookieObj.loggedIn;
  if (cookieBool === "true") {
    return true;
  } else {
    return false;
  }
};

// Write ProtectedRoute function here
const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add" element={<ProtectedRoute component={Add} />} />
    </Routes>
  );
};

export default Router;
