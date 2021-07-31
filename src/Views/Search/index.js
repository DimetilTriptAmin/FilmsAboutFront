import React from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import {
  Popper,
  MenuItem,
  MenuList,
  Paper,
  Container,
} from "@material-ui/core";
import { Oval } from "@agney/react-loading";

import useStyles from "./styles";
import { FilmShortcut } from "../FilmShortcut";
import { Link } from "react-router-dom";

const Search = ({
  anchorEl,
  handleChange,
  onMenuItemClick,
  onSearchClick,
  films = [],
  isLoading,
  searchString,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder='Search…'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
        value={searchString}
        onClick={onSearchClick}
      />
      <Popper anchorEl={anchorEl} open={Boolean(searchString)}>
        {isLoading ? (
          <Container className={`${classes.loader} ${classes.flex}`}>
            <Oval width='100' color='#fff' />
          </Container>
        ) : (
          <Paper className={classes.searchMenu}>
            <MenuList anchororigin={{ vertical: "bottom", horizontal: "left" }}>
              {films.map((film, index) => (
                <MenuItem
                  className={classes.menuItem}
                  key={index}
                  onClick={onMenuItemClick}
                >
                  <Link to={`film${film.id}`} className={classes.link}>
                    <FilmShortcut
                      poster={film.poster}
                      title={film.title}
                      rating={film.rating}
                    />
                  </Link>
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        )}
      </Popper>
    </div>
  );
};

Search.propTypes = {};

export default Search;
