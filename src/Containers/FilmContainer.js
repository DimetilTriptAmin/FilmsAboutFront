import { useEffect } from "react";
import Film from "../Views/Film";
import { useDispatch, useSelector } from "react-redux";
import { filmRequest, commentsRequest } from "../redux/actions";
import { filmDataSelector, filmCommentsSelector } from "../redux/selectors";

const FilmContainer = ({ id }) => {
  const dispatch = useDispatch();
  const filmData = useSelector(filmDataSelector);
  const comments = useSelector(filmCommentsSelector);
  useEffect(() => {
    dispatch(filmRequest(id));
    dispatch(commentsRequest(id));
  }, [id, dispatch]);

  return <Film filmData={filmData} comments={comments} />;
};

export default FilmContainer;
