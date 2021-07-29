import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { FilmCardListContainer } from './Containers/FilmCardListContainer';
import FilmContainer from './Containers/FilmContainer';
import UserSettingsContainer from './Containers/UserSettingsContainer';
import NotFound from './Views/NotFound';


const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <FilmCardListContainer />
                </Route>
                <Route path="/film:id">
                    <FilmContainer />
                </Route>
                <Route path="/profile">
                    <UserSettingsContainer />
                </Route>
                <Router path='*'>
                    <NotFound />
                </Router>
            </Switch>
        </Router>
    );
};

AppRouter.propTypes = {};

export default AppRouter;