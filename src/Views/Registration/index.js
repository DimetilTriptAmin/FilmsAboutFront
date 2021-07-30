import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Button, TextField } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';

import useStyles from './styles';

const Login = ({ handleFormSubmit }) => {
    const classes = useStyles();

    const validationSchema = Yup.object({
        username: Yup.string('Enter your username')
            .min(2, 'Username should be of minimum 2 characters length')
            .required('Username is required'),
        password: Yup.string('Enter your password')
            .min(6, 'Password should be of minimum 6 characters length')
            .required('Password is required'),
    });

    return (
        <div className={classes.formContainer}>
            <p className={classes.title}>Registration</p>
            <Formik
                className={classes.root}
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
            >
                {({ errors, touched, values }) => (
                    <Form className={classes.form}>
                        <Field
                            component={TextField}
                            className={`${classes.input} ${classes.field}`}
                            name="username"
                            label="Username"
                            InputProps={{
                                className: classes.input,
                            }}
                        ></Field>
                        <Field
                            component={TextField}
                            className={`${classes.input} ${classes.field}`}
                            name="email"
                            label="Email"
                            type="email"
                            InputProps={{
                                className: classes.input,
                            }}
                        ></Field>
                        <Field
                            component={TextField}
                            className={`${classes.input} ${classes.field}`}
                            name="password"
                            label="Password"
                            type="password"
                            InputProps={{
                                className: classes.input,
                            }}
                        ></Field>
                        <Field
                            component={TextField}
                            className={`${classes.input} ${classes.field}`}
                            name="confirmPassword"
                            label="Confirm password"
                            type="password"
                            InputProps={{
                                className: classes.input,
                            }}
                        ></Field>

                        <Button className={classes.submit} type="submit">
                            create account
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

Login.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Login;
