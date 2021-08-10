import React from "react";
import Login from "../views/Login";
import { useDispatch } from "react-redux";
import { logInRequest } from "../redux/actions";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import { userLoadingSelector } from "../redux/selectors";
import { LOADING_TRUE } from "../redux/slices/userSlice";

const LoginContainer = ({ history }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(userLoadingSelector);

  const handleFormSubmit = (values) => {
    dispatch(LOADING_TRUE());
    dispatch(logInRequest({ values: values, push: history.push }));
  };

  return <Login handleFormSubmit={handleFormSubmit} isLoading={isLoading} />;
};

export default withRouter(LoginContainer);
