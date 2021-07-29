import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ratinfByPairIdRequest, userById } from "../redux/actions";
import PropTypes from "prop-types";

import Comment from "../Views/Comment";

const CommentContainer = ({ userId, filmId, publishDate, text }) => {
  const dispatch = useDispatch();

  const fetchedRate = useSelector((state) => state.rating.rating[userId]);
  const fetchedUser = useSelector((state) => state.user.users[userId]);
  const isLoading = useSelector(() => fetchedUser && fetchedRate);

  const [userRate, setUserRate] = useState(0);
  const [user, setUser] = useState({ avatar: "", userName: "" });

  useEffect(() => {
    dispatch(ratinfByPairIdRequest({ userId: userId, filmId: filmId }));
    dispatch(userById(userId));
    if (fetchedRate !== undefined) setUserRate(fetchedRate);
    if (fetchedUser !== undefined) setUser(fetchedUser);
  }, [userId, filmId, dispatch, isLoading]);
  return (
    <Comment
      publishDate={publishDate}
      text={text}
      userRate={userRate}
      user={user}
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
