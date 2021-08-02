import React from 'react';
import Login from '../views/Login';
import PropTypes from 'prop-types';

const LoginContainer = () => {

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return <Login handleFormSubmit={handleFormSubmit}/>;
};

LoginContainer.propTypes = {};

export default LoginContainer;
