import React from "react";
import Login from "../views/Login";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../redux/actions";
import { Redirect } from "react-router";
import { IsAuthorizedSelector } from "../redux/selectors";

const LoginContainer = () => {
  const dispatch = useDispatch();

  const IsAuthorized = useSelector(IsAuthorizedSelector); //username header

  const handleFormSubmit = (values) => {
    dispatch(loginRequest(values));
  };

  return <Login handleFormSubmit={handleFormSubmit} />;
};

export default LoginContainer;
