import React from 'react';
import Login from '../views/Login';
import { useDispatch } from 'react-redux';
import { logInRequest } from '../redux/actions';
import { withRouter } from 'react-router';

const LoginContainer = ({history}) => {
    const dispatch = useDispatch();

    const handleFormSubmit = (values) => {
        dispatch(logInRequest({values: values, push: history.push}));
    };

    return <Login handleFormSubmit={handleFormSubmit} />;
};

export default withRouter(LoginContainer);
