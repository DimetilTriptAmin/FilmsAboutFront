import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { filmRequest, commentsRequest } from "../redux/actions";
import { filmDataSelector, filmCommentsSelector } from "../redux/selectors";
import Film from "../views/Film";

const FilmContainer = () => {
  const dispatch = useDispatch();

  const filmData = useSelector(filmDataSelector);
  const comments = useSelector(filmCommentsSelector);

  const { id } = useParams();

  useEffect(() => {
    dispatch(filmRequest(id));
    dispatch(commentsRequest(id));
  }, [id, dispatch]);

  return <Film filmData={filmData} comments={comments} />;
};

export default FilmContainer;
