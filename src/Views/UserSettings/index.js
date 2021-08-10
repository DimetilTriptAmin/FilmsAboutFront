import React from 'react';
import { useStyles } from './styles';
import { Button, Typography, Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Oval } from '@agney/react-loading';

const UserSettings = ({
    handleSubmit,
    showPreview,
    userData,
    imageData,
}) => {
    const classes = useStyles();

    return (
        <div>
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
                    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                        <Grid item>
                            <Typography className={classes.category} variant="h3">
                                Image Settings
                            </Typography>
                        </Grid>
                        <Grid item>
                            {!userData.isLoading ? (
                                <div>
                                    <div className={classes.imageContainer}>
                                        <img
                                            className={classes.image}
                                            src={imageData.imageSource}
                                            alt=""
                                        />
                                    </div>
                                    <div className={classes.changeImageContainer}>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={showPreview}
                                            id="image-uploader"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <Container>
                                    <Oval width="100" color="#fff" />
                                </Container>
                            )}
                        </Grid>
                        <div className={classes.saveButtonContainer}>
                            <Button className={classes.saveButton} type="submit" >
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};
UserSettings.propTypes = {};

export default UserSettings;
