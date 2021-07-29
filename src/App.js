
import React from 'react';
import HeaderContainer from './Containers/HeaderContainer';
import AppRouter from './AppRouter';
import { Container } from '@material-ui/core';
import NotificationContainer from "./Containers/NotificationContainer";

const App = () => {
    return (
       <NotificationContainer
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        TransitionComponent={Slide}
      />
        <Container maxWidth='lg' style={{ backgroundColor: '#242322'}}>
            <HeaderContainer />
            <AppRouter />
        </Container>
    );
};

App.propTypes = {};

export default App;
