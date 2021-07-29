import { FilmCardList } from '../Views/FilmCardList';
import { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filmListRequest } from "../redux/actions";

const FilmCardListContainer = () => {
    const dispatch = useDispatch();
    const {films} = useSelector(state => state.filmList);

    useEffect(() => {
        dispatch(filmListRequest());
      }, [dispatch]);

    return (
        <div>
            <FilmCardList films={films} />
        </div>
    );
};

export { FilmCardListContainer };
