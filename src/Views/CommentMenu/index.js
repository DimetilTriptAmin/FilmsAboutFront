import React from "react";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import MoreVert from "@material-ui/icons/MoreVert";
import { Menu, MenuItem } from "@material-ui/core";

import useStyles from "./styles";

const CommentMenu = ({
  isMenuOpen,
  anchorEl,
  handleMenuClose,
  handleMenuOpen,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.flex}>
      <IconButton
        edge='end'
        aria-haspopup='true'
        color='inherit'
        onClick={handleMenuOpen}
      >
        <MoreVert style={{ color: "#fff" }} />
      </IconButton>

      <Menu
        disableScrollLock={true}
        className={classes.menu}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem className={classes.menuItem}>Edit</MenuItem>
        <MenuItem className={classes.menuItem}>Delete</MenuItem>
      </Menu>
    </div>
  );
};

CommentMenu.propTypes = {
  isMenuOpen: PropTypes.bool,
  anchorEl: PropTypes.any,
  handleMenuClose: PropTypes.func,
  handleMenuOpen: PropTypes.func,
};

export default CommentMenu;
