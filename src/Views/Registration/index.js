import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Button, Link, Container } from "@material-ui/core";
import { Formik, Field, Form } from "formik";
import { Oval } from "@agney/react-loading";
import { FormikTextField } from "formik-material-fields";

import useStyles from "./styles";

const Registration = ({ handleFormSubmit, isLoading }) => {
  const classes = useStyles();

  const validationSchema = Yup.object({
    username: Yup.string("Enter your username")
      .min(2, "Username should be of minimum 2 characters length")
      .required("Username is required"),
    email: Yup.string("Enter your email")
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string("Enter your password")
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
    confirmPassword: Yup.string("Enter the same password")
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password is required"),
  });

  return (
    <div className={classes.formContainer}>
      <p className={classes.title}>Registration</p>
      <Formik
        className={classes.root}
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched, values }) => (
          <Form className={classes.form}>
            <Field
              component={FormikTextField}
              className={`${classes.input} ${classes.field}`}
              name='username'
              label='Username'
              InputProps={{
                className: classes.input,
              }}
            ></Field>
            <Field
              component={FormikTextField}
              className={`${classes.input} ${classes.field}`}
              name='email'
              label='Email'
              type='email'
              InputProps={{
                className: classes.input,
              }}
            ></Field>
            <Field
              component={FormikTextField}
              className={`${classes.input} ${classes.field}`}
              name='password'
              label='Password'
              type='password'
              InputProps={{
                className: classes.input,
              }}
            ></Field>
            <Field
              component={FormikTextField}
              className={`${classes.input} ${classes.field}`}
              name='confirmPassword'
              label='Confirm password'
              type='password'
              InputProps={{
                className: classes.input,
              }}
            ></Field>

            {isLoading ? (
              <Container className={`${classes.metaComponent} ${classes.flex}`}>
                <Oval width='100' color='#fff' />
              </Container>
            ) : (
              <Button className={classes.submit} type='submit'>
                Create Account
              </Button>
            )}
            <Link className={classes.link} href='/login'>
              I already have an account
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

Registration.propTypes = { handleFormSubmit: PropTypes.func };

export default Registration;
