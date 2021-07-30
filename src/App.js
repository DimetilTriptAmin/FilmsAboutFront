import React from 'react';
import { Container } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

import NotificationContainer from './containers/NotificationContainer';
import AppRouter from './AppRouter';

const App = () => {
    return (
        <Container style={{ backgroundColor: '#242322' }}>
            <NotificationContainer
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                TransitionComponent={Slide}
            />
            <AppRouter />
        </Container>
    );
};

App.propTypes = {};

export default App;
