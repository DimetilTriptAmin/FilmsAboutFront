import React from "react";
import Comment from "../Comment";
import PropTypes from "prop-types";
import { Container, Button } from "@material-ui/core";
import { Oval } from "@agney/react-loading";
import { ErrorOutline } from "@material-ui/icons";
import useStyles from "./styles";
import { Formik, Form, Field } from "formik";
import { FormikTextField } from "formik-material-fields";
import * as Yup from "yup";

const CommentList = ({ commentList, isAuthorized, commentSubmitClick }) => {
  const classes = useStyles();

  const validationSchema = Yup.object({
    Comment: Yup.string("Enter your comment")
      .required("Comment can not be empty.")
      .max(500, "Review is too long."),
  });

  return (
    <Container maxWidth='lg'>
      {isAuthorized === true && (
        <div className={classes.commentContainer}>
          <Formik
            className={classes.root}
            initialValues={{ Comment: "" }}
            validationSchema={validationSchema}
            onSubmit={commentSubmitClick}
          >
            {({ errors, touched, values }) => (
              <Form className={classes.form}>
                <Field
                  component={FormikTextField}
                  className={`${classes.input} ${classes.field}`}
                  name='Comment'
                  label='Enter your review'
                  InputProps={{
                    className: classes.input,
                    multiline: true,
                  }}
                ></Field>
                <Button className={classes.submit} type='submit'>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      )}
      {!commentList.isLoading ? (
        commentList.Loaded ? (
          commentList.values.map((comment, key) => (
            <Comment
              id={comment.id}
              username={comment.userName}
              avatar={comment.avatar}
              text={comment.text}
              publishDate={comment.publishDate}
              rating={comment.rating}
              key={key}
            />
          ))
        ) : (
          <div className={`${classes.metaComponent} ${classes.flex}`}>
            <ErrorOutline
              style={{ fontSize: 100, color: "#fff", margin: "auto" }}
            />
          </div>
        )
      ) : (
        <Container className={`${classes.metaComponent} ${classes.flex}`}>
          <Oval width='100' color='#fff' />
        </Container>
      )}
    </Container>
  );
};

CommentList.propTypes = {
  commentList: PropTypes.object.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  commentSubmitClick: PropTypes.func.isRequired,
};

export default CommentList;
