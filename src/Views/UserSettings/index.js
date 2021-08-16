import React from "react";
import { useStyles } from "./styles";
import * as Yup from "yup";

import { Button, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Formik, Field, Form } from "formik";
import { FormikTextField } from "formik-material-fields";
import { Oval } from "@agney/react-loading";

const UserSettings = ({
  handleSubmit,
  showPreview,
  userData,
  imageData,
  handleChangePasswordSubmit,
}) => {
  const classes = useStyles();

  const validationSchema = Yup.object({
    Password: Yup.string("Enter your password")
      .min(6, "Password should be of minimum 6 characters length")
      .required("Password is required"),
    NewPassword: Yup.string("Enter new password")
      .min(6, "Password should be of minimum 6 characters length")
      .notOneOf([Yup.ref("Password")], "Passwords must not match")
      .required("Password is required"),
  });

  return (
    <div className={classes.root}>
      <Container className={classes.titleContainer}>
        <Typography variant='h2'>User Settings Page</Typography>
      </Container>

      <Container className={classes.content}>
        <Container>
          <Typography className={classes.category} variant='h3'>
            Info
          </Typography>
          <div className={classes.changeImageContainer}>
            <Typography variant='h5'>
              Username: <span className={classes.span}>{userData.name}</span>
            </Typography>
          </div>
          <div className={classes.changeImageContainer}>
            <Typography variant='h5'>
              Email: <span className={classes.span}>{userData.email}</span>
            </Typography>
          </div>
        </Container>

        <form
          autoComplete='off'
          noValidate
          onSubmit={handleSubmit}
          className={classes.form}
        >
          <Container>
            <Typography className={classes.category} variant='h3'>
              Image Settings
            </Typography>
          </Container>
          <Container>
            {!userData.isLoading ? (
              <div>
                <div className={classes.imageContainer}>
                  <img
                    className={classes.image}
                    src={imageData.imageSource}
                    alt=''
                  />
                </div>
                <div className={classes.imageContainer}>
                  <input
                    type='file'
                    accept='image/*'
                    onChange={showPreview}
                    id='image-uploader'
                  />
                </div>
                <div className={classes.saveButtonContainer}>
                  <Button className={classes.saveButton} type='submit'>
                    Save Changes
                  </Button>
                </div>
              </div>
            ) : (
              <Container>
                <Oval width='100' color='#fff' />
              </Container>
            )}
          </Container>
        </form>
        <Container className={classes.form}>
          <Typography className={classes.category} variant='h3'>
            Change Password
          </Typography>
          <Formik
            initialValues={{ Password: "", NewPassword: "" }}
            validationSchema={validationSchema}
            onSubmit={handleChangePasswordSubmit}
          >
            {() => (
              <Form className={classes.form}>
                <Field
                  component={FormikTextField}
                  className={`${classes.input} ${classes.field}`}
                  name='Password'
                  label='Current password'
                  type='password'
                  InputProps={{
                    className: classes.input,
                  }}
                ></Field>

                <Field
                  component={FormikTextField}
                  className={`${classes.input} ${classes.field}`}
                  name='NewPassword'
                  label='New password'
                  type='password'
                  InputProps={{
                    className: classes.input,
                  }}
                ></Field>

                <Button className={classes.submit} type='submit'>
                  Change
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </Container>
    </div>
  );
};
UserSettings.propTypes = {};

export default UserSettings;
