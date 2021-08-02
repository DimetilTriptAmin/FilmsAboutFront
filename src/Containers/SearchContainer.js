import React, { useEffect } from "react";
import Search from "../views/Search";
import { useDispatch, useSelector } from "react-redux";
import { filmListSelector } from "../redux/selectors";
import { useState } from "react";
import { filmListRequest } from "../redux/actions";

const SearchContainer = ({ history }) => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const filmList = useSelector(filmListSelector);
  const [films, setFilms] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    if (!filmList.Loaded) dispatch(filmListRequest());
    setFilms(
      filmList.films.filter((film) =>
        film.title.match(new RegExp(searchString, "i")),
      ).sort((a, b) => b.rating - a.rating),
    );
  }, [dispatch, searchString]);

  const handleChange = (event) => {
    setSearchString(event.target.value);
    setAnchorEl(event.currentTarget);
  };

  return (
    <Search
      anchorEl={anchorEl}
      handleChange={handleChange}
      films={films}
      searchString={searchString}
    />
  );
};

export default SearchContainer;
