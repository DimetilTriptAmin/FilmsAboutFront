import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentListRequest } from "../redux/actions";
import PropTypes from "prop-types";
import { filmCommentListSelector } from "../redux/selectors";
import CommentList from '../views/CommentList';

const CommentContainer = ({ filmId }) => {

  const dispatch = useDispatch();
  const commentList = useSelector(filmCommentListSelector);


  useEffect(() => {
    dispatch(commentListRequest(filmId))
  }, [ filmId, dispatch]);

  return (
    <CommentList commentList={commentList}/>
  );
};

CommentContainer.propTypes = {
  filmId: PropTypes.number.isRequired,
};

export default CommentContainer;
