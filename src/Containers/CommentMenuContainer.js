import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { commentDeleteRequest } from "../redux/actions/index";

import CommentMenu from "../views/CommentMenu";

const CommentMenuContainer = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const deleteCommentClickHandler = () => {
    dispatch(commentDeleteRequest(id));
  };

  return (
    <CommentMenu
      handleMenuOpen={handleMenuOpen}
      handleMenuClose={handleMenuClose}
      isMenuOpen={isMenuOpen}
      anchorEl={anchorEl}
      deleteCommentClickHandler={deleteCommentClickHandler}
    />
  );
};

export default CommentMenuContainer;
