import React from "react";
import Registration from "../views/Registration";
import { useDispatch, useSelector } from "react-redux";
import { registrationRequest } from "../redux/actions";
import { withRouter } from "react-router";

import { LOADING_TRUE } from "../redux/slices/userSlice";
import { userLoadingSelector } from "../redux/selectors";

const RegistrationContainer = ({ history }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(userLoadingSelector);

  const handleFormSubmit = (values) => {
    dispatch(LOADING_TRUE());
    dispatch(registrationRequest({ values: values, push: history.push }));
  };

  return (
    <Registration handleFormSubmit={handleFormSubmit} isLoading={isLoading} />
  );
};

export default withRouter(RegistrationContainer);
