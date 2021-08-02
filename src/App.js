import React from 'react';
import { Container } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

import NotificationContainer from './containers/NotificationContainer';
import AppRouter from './AppRouter';

const App = () => {

    return (
        <div>
            <NotificationContainer
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                TransitionComponent={Slide}
            />
            <AppRouter />
        </div>
    );
};

App.propTypes = {};

export default App;
