import { FilmCardList } from "../views/FilmCardList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filmListRequest } from "../redux/actions";
import { filmResetData } from "../redux/slices/filmSlice";
import { filmListSelector } from "../redux/selectors";

const FilmCardListContainer = () => {
  const dispatch = useDispatch();
  const films = useSelector(filmListSelector);

  useEffect(() => {
    dispatch(filmListRequest());
    dispatch(filmResetData());
  });

  return (
    <div>
      <FilmCardList films={films} />
    </div>
  );
};

export default FilmCardListContainer;
