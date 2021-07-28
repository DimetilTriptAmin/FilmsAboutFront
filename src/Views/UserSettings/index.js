import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';
import {
    Button,
    InputLabel,
    TextField,
    Typography,
    Container,
    Grid,
} from '@material-ui/core';

const UserSettings = (props) => {
    const classes = useStyles();

    return (
        <Grid
            className={classes.root}
            container
            direction="column"
            alignItems="center"
        >
            <Grid item>
                <Typography className={classes.title} variant="h2">
                    User Settings Page
                </Typography>
            </Grid>

            <Grid container direction="column" className={classes.content}>
                <form
                    autoComplete="off"
                    noValidate
                    onSubmit={props.handleFormSubmit}
                >
                    <Grid item>
                        <Typography className={classes.category} variant="h3">
                            Image Settings
                        </Typography>
                    </Grid>
                    <Grid item>
                        <div className={classes.imageContainer}>
                            <img
                                className={classes.image}
                                src={props.values.imageSource}
                                alt=""
                            />
                        </div>
                        <div className={classes.changeImageContainer}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={props.showPreview}
                                id='image-uploader'
                            />
                        </div>
                    </Grid>
                    <div className={classes.saveButtonContainer}>
                        <Button className={classes.saveButton} type="submit">Save Changes</Button>
                    </div>
                </form>
            </Grid>
        </Grid>
    );
};
UserSettings.propTypes = {};

export default UserSettings;
