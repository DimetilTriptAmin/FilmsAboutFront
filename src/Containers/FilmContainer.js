import { useEffect } from "react";
import Film from "../Views/Film";
import { useDispatch, useSelector } from "react-redux";
import { filmRequest, commentsRequest } from "../redux/actions";

const FilmContainer = ({ id }) => {
  const dispatch = useDispatch();
  const filmData = useSelector((state) => state.film);
  const comments = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(filmRequest(id));
    dispatch(commentsRequest(id));
  }, [id, dispatch]);

  return <Film filmData={filmData} comments={comments} />;
};

export default FilmContainer;
