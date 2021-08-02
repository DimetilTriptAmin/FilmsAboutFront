import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Button, Link } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { FormikTextField } from "formik-material-fields"; // ???

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
            <Formik
                className={classes.root}
                initialValues={{ username: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
            >
                {({ errors, touched, values}) => (
                    <Form className={classes.form}>
                        <Field
                            component={FormikTextField}
                            className={`${classes.input} ${classes.field}`}
                            name="username"
                            label="Username"
                            InputProps={{
                                className: classes.input,
                            }}
                        ></Field>

                        <Field
                            component={FormikTextField}
                            className={`${classes.input} ${classes.field}`}
                            name="password"
                            label="Password"
                            type="password"
                            InputProps={{
                                className: classes.input,
                            }}
                        ></Field>

                        <Button className={classes.submit} type="submit">
                            Log in
                        </Button>
                        <Link className={classes.link} href="/registration">
                            I don't have an account yet
                        </Link>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

Login.propTypes = {};

export default Login;
