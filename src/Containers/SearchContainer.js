import React, { useEffect } from "react";
import Search from "../views/Search";
import { useDispatch, useSelector } from "react-redux";
import { filmListSelector } from "../redux/selectors";
import { useState } from "react";
import { filmListRequest } from "../redux/actions";

const SearchContainer = ({ history }) => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [films, setFilms] = useState([]);

  const filmList = useSelector(filmListSelector);

  useEffect(() => {
    if (!filmList.Loaded) dispatch(filmListRequest());
    setFilms(
      filmList.films.filter((film) =>
        film.title.match(new RegExp(searchString, "i")),
      ),
    );
  }, [dispatch, searchString, filmList.Loaded, filmList.films]);
  const handleChange = (event) => {
    setSearchString(event.target.value);
    setAnchorEl(event.currentTarget);
  };

  const onClick = (event) => {
    setSearchString("");
  };

  return (
    <Search
      anchorEl={anchorEl}
      handleChange={handleChange}
      films={films}
      searchString={searchString}
      onClick={onClick}
    />
  );
};

export default SearchContainer;
