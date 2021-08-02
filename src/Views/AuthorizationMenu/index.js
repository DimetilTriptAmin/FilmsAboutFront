import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';

import useStyles from './styles';

const AuthorizationMenu = ({ onLoginClick, onRegistrationClick }) => {

    const classes = useStyles();

    return (
        <div className={classes.flex}>
            <ButtonGroup
                color="primary"
                variant="text"
                aria-label="text primary button group"
                size="large"
            >
                <Button
                    className={`${classes.menuItem} `}
                    onClick={onLoginClick}
                >
                    Login
                </Button>
                <Button
                    className={`${classes.menuItem} `}
                    onClick={onRegistrationClick}
                >
                    Register
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default AuthorizationMenu;
