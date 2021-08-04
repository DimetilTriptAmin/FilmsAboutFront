import React from 'react';
import Login from '../views/Login';
import { useDispatch } from 'react-redux';
import { logInRequest } from '../redux/actions';

const LoginContainer = () => {
    const dispatch = useDispatch();

    const handleFormSubmit = (values) => {
        console.log(values);
        dispatch(logInRequest(values));
    };

    return <Login handleFormSubmit={handleFormSubmit} />;
};

export default LoginContainer;
