import { useState, useEffect } from "react";
import Film from "../Views/Film";
import { useDispatch, useSelector } from "react-redux";
import { filmRequest } from "../redux/actions";

const FilmContainer = ({id}) => {

  const dispatch = useDispatch();
  const filmData = useSelector(state => state.film);

  useEffect(() => {
    dispatch(filmRequest());
  }, []);

  return <Film filmData={filmData} />;
};

export default FilmContainer;
