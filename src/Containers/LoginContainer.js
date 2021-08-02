import React from 'react';
import Login from '../views/Login';
import { useDispatch } from 'react-redux';
import {loginRequest} from "../redux/actions";

const LoginContainer = () => {

    const dispatch = useDispatch();

    const handleFormSubmit = (values) => {
        console.log(values);
        dispatch(loginRequest(values));
    }

    return <Login handleFormSubmit={handleFormSubmit}/>;
};

export default LoginContainer;
