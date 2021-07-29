import { useEffect } from "react";
import Film from "../Views/Film";
import { useDispatch, useSelector } from "react-redux";
import { filmRequest, commentsRequest } from "../redux/actions";
import { useParams } from "react-router-dom";

const FilmContainer = () => {
  const dispatch = useDispatch();
  const filmData = useSelector((state) => state.film);
  const comments = useSelector((state) => state.comments);

  const {id} = useParams();

  useEffect(() => {
    dispatch(filmRequest(id));
    dispatch(commentsRequest(id));
  }, [id, dispatch]);
  
  return <Film filmData={filmData} comments={comments} />;
};

export default FilmContainer;
