import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ratinfByPairIdRequest } from "../redux/actions";
import Comment from "../Views/Comment";

const CommentContainer = ({ userId, filmId, publishDate, text }) => {
  const dispatch = useDispatch();
  const fetchedRate = useSelector((state) => state.rating.rating[userId]);
  const isLoading = useSelector((state) => state.rating.isLoading);
  const [userRate, setUserRate] = useState(0);

  useEffect(() => {
    dispatch(ratinfByPairIdRequest({ userId: userId, filmId: filmId }));
    if (fetchedRate !== undefined) setUserRate(fetchedRate);
  }, [userId, filmId, dispatch, fetchedRate]);
  return (
    <Comment
      publishDate={publishDate}
      text={text}
      userRate={userRate}
      userId={userId}
      isLoading={isLoading}
    />
  );
};

export default CommentContainer;
