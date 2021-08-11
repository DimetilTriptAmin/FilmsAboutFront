import React from "react";
import Registration from "../views/Registration";
import { useDispatch, useSelector } from "react-redux";
import { registrationRequest } from "../redux/actions";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import { LOADING_TRUE } from "../redux/slices/userSlice";
import { userAuthorizeLoadingSelector } from "../redux/selectors";

const RegistrationContainer = ({ history }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(userAuthorizeLoadingSelector);

  const handleFormSubmit = (values) => {
    dispatch(LOADING_TRUE());
    dispatch(registrationRequest({ values: values, push: history.push }));
  };

  return (
    <Registration handleFormSubmit={handleFormSubmit} isLoading={isLoading} />
  );
};

RegistrationContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(RegistrationContainer);
