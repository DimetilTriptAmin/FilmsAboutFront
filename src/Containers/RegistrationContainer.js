import React from 'react';
import Registration from '../views/Registration';
import { useDispatch } from 'react-redux';
import { registrationRequest } from '../redux/actions';

const RegistrationContainer = () => {

    const dispatch = useDispatch();

    const handleFormSubmit = (values) => {
        console.log(values);
        dispatch(registrationRequest(values));
    };

    return <Registration handleFormSubmit={handleFormSubmit}/>;
};

export default RegistrationContainer;
