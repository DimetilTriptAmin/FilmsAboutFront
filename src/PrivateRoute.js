import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { isAuthorizedSelector } from './redux/selectors';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = useSelector(isAuthorizedSelector);
  return <Route {...rest} render={props => (isAuthorized ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;