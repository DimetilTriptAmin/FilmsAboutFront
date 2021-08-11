import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { logInRequest } from "../redux/actions";
import { userAuthorizeLoadingSelector } from "../redux/selectors";
import { LOADING_TRUE } from "../redux/slices/userSlice";
import Login from "../views/Login";

const LoginContainer = ({ history }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(userAuthorizeLoadingSelector);

  const handleFormSubmit = (values) => {
    dispatch(LOADING_TRUE());
    dispatch(logInRequest({ values: values, push: history.push }));
  };

  return <Login handleFormSubmit={handleFormSubmit} isLoading={isLoading} />;
};

LoginContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(LoginContainer);
