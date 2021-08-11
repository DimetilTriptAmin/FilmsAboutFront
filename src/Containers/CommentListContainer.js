import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentListRequest, commentSubmitRequest } from "../redux/actions";
import PropTypes from "prop-types";
import {
  filmCommentListSelector,
  isAuthorizedSelector,
} from "../redux/selectors";
import CommentList from "../views/CommentList";

const CommentContainer = ({ filmId }) => {
  const dispatch = useDispatch();
  const commentList = useSelector(filmCommentListSelector);
  const isAuthorized = useSelector(isAuthorizedSelector);

  useEffect(() => {
    dispatch(commentListRequest(filmId));
  }, [filmId, dispatch]);

  const commentSubmitClick = ({ Comment }) => {
    dispatch(commentSubmitRequest({ text: Comment, filmId: filmId }));
  };

  return (
    <CommentList
      commentList={commentList}
      isAuthorized={isAuthorized}
      commentSubmitClick={commentSubmitClick}
    />
  );
};

CommentContainer.propTypes = {
  filmId: PropTypes.number.isRequired,
};

export default CommentContainer;
