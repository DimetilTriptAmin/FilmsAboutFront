import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import fight_club_image from '../../static/images/cards/fight_club.jpg';
import { useStyles } from './styles';

const FilmCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title={props.title}
                subheader={`Rating: ${props.rating}`}
            />
            <CardMedia
                className={classes.media}
                //image={props.poster}
                image={fight_club_image}
                //title="Fight Club"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};

export { FilmCard };
