import Search from "./search/container/Search";
import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Route } from "react-router-dom";
import User from "./user/container/User";
import Signup from "./auth/container/Signup";
import Login from "./auth/container/Login";
import { useDispatch, useSelector } from "react-redux";
import { actions as authActions } from "./auth/state";

function App() {
  useEffect(() => {
    const bodyEl = document.getElementsByTagName("body")[0];
    const loadingEl = document.getElementById("init-loading");
    bodyEl.removeChild(loadingEl);
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.fetchUser());
  }, [dispatch]);
  const authStatus = useSelector((state) => state.auth.status);
  console.log("authStatus", authStatus);
  return (
    <>
      {authStatus && (
        <>
          <Route exact path="/" component={Search} />
          <Route path="/user/:name" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </>
      )}
    </>
  );
}

export default App;
