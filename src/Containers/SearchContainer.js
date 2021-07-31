import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Search from "../views/Search";
import { filmListSelector } from "../redux/selectors";
import { filmListRequest } from "../redux/actions";

const SearchContainer = ({ history }) => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [searchString, setSearchString] = useState("");

  const filmList = useSelector(filmListSelector).films.filter((film) =>
    film.title.match(new RegExp(`^${searchString}`, "i")),
  );

  useEffect(() => {
    if (!filmList.Loaded) dispatch(filmListRequest());
  }, [dispatch, filmList.Loaded]);

  const handleChange = (event) => {
    setSearchString(event.target.value);
    setAnchorEl(event.currentTarget);
  };

  const onClick = () => {
    setSearchString("");
  };

  return (
    <Search
      anchorEl={anchorEl}
      handleChange={handleChange}
      films={filmList}
      searchString={searchString}
      onClick={onClick}
    />
  );
};

export default SearchContainer;
