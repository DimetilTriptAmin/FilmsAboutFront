import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FILM_DATA_RESET } from "../redux/slices/filmSlice";

import { filmRequest, commentListRequest } from "../redux/actions";
import { filmDataSelector, filmCommentListSelector } from "../redux/selectors";
import Film from "../views/Film";

const FilmContainer = () => {
  const dispatch = useDispatch();

  const filmData = useSelector(filmDataSelector);
  const comments = useSelector(filmCommentListSelector);

  const { id } = useParams();

  useEffect(() => {
    dispatch(filmRequest(id));
    dispatch(commentListRequest(id));

    return () => {
      dispatch(FILM_DATA_RESET());
    };
  }, [id, dispatch]);

  return <Film filmData={filmData} comments={comments} />;
};

export default FilmContainer;
