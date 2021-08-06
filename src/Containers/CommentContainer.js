import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ratingByPairIdRequest, userById } from "../redux/actions";
import { userRateSelector, userListSelector } from "../redux/selectors";
import PropTypes from "prop-types";

import Comment from "../views/Comment";

const CommentContainer = ({ userId, filmId, publishDate, text }) => {
  const dispatch = useDispatch();

  const fetchedRate = useSelector(userRateSelector(userId));
  const fetchedUser = useSelector(userListSelector(userId));

  useEffect(() => {
    dispatch(ratingByPairIdRequest({ userId: userId, filmId: filmId }));
    dispatch(userById(userId));
  }, [userId, filmId, dispatch]);

  return (
    <Comment
      publishDate={publishDate}
      text={text}
      userRate={fetchedRate ?? 0}
      user={fetchedUser ?? { avatar: "", userName: "" }}
    />
  );
};

CommentContainer.propTypes = {
  userId: PropTypes.number.isRequired,
  filmId: PropTypes.number.isRequired,
  publishDate: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CommentContainer;
