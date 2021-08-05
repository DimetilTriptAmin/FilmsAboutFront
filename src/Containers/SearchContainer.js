import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Search from "../views/Search";
import { filmListSelector } from "../redux/selectors";
import { filmListRequest } from "../redux/actions";

const SearchContainer = ({ history }) => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [searchString, setSearchString] = useState("");

  const isLoading = useSelector(filmListSelector).isLoading;
  const filmList = useSelector(filmListSelector).films.filter((film) =>
    film.title
      .match(new RegExp(`\\b${searchString}`, "i"))
      .sort((a, b) => b.rating - a.rating),
  );

  const handleChange = (event) => {
    setSearchString(event.target.value);
    setAnchorEl(event.currentTarget);
  };

  const onSearchClick = () => {
    //if (!filmList.Loaded) dispatch(filmListRequest());
  };

  const onMenuItemClick = () => {
    setSearchString("");
  };

  return (
    <Search
      anchorEl={anchorEl}
      handleChange={handleChange}
      films={filmList}
      searchString={searchString}
      onMenuItemClick={onMenuItemClick}
      onSearchClick={onSearchClick}
      isLoading={isLoading}
    />
  );
};

export default SearchContainer;
