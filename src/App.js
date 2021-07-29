import React from 'react';
import FilmContainer from './Containers/FilmContainer';
import {FilmCardListContainer} from './Containers/FilmCardListContainer';
import HeaderContainer from './Containers/HeaderContainer';
import UserSettingsContainer from './Containers/UserSettingsContainer';

const App = () => {
    return (
        <div>
            <HeaderContainer />
            {/* <FilmCardListContainer /> */}
            {/* <FilmContainer /> */}
            <UserSettingsContainer />
        </div>
    );
};

App.propTypes = {};

export default App;
