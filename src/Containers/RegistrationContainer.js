import React from 'react';
import Registration from '../views/Registration';
import { useDispatch } from 'react-redux';
import { registrationRequest } from '../redux/actions';
import { withRouter } from 'react-router';

const RegistrationContainer = ({history}) => {

    const dispatch = useDispatch();

    const handleFormSubmit = (values) => {
        dispatch(registrationRequest({values: values, push: history.push}));
    };

    return <Registration handleFormSubmit={handleFormSubmit}/>;
};

export default withRouter(RegistrationContainer);
