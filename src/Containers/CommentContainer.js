import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ratinfByPairIdRequest, userById } from "../redux/actions";
import PropTypes from "prop-types";

import Comment from "../views/Comment";

const CommentContainer = ({ userId, filmId, publishDate, text }) => {
  const dispatch = useDispatch();

  const fetchedRate = useSelector((state) => state.rating.rating[userId]);
  const fetchedUser = useSelector((state) => state.user.users[userId]);
  const isLoading = useSelector(() => fetchedUser && fetchedRate);

  useEffect(() => {
    dispatch(ratinfByPairIdRequest({ userId: userId, filmId: filmId }));
    dispatch(userById(userId));
  }, [userId, filmId, dispatch, isLoading]);

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
