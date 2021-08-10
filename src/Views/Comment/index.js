import { Container, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import ReactRoundedImage from "react-rounded-image";
import useStyles from "./styles";
import PropTypes from "prop-types";

import CommentMenuContainer from "../../containers/CommentMenuContainer";

const Comment = ({ username, avatar, rating, publishDate, text }) => {
  const classes = useStyles();
  return (
    <Container className={classes.commentContainer}>
      <div>
        <div className={`${classes.flex} ${classes.header}`}>
          <div className={`${classes.flex} ${classes.userContainer}`}>
            <ReactRoundedImage
              image={`data:image/jpeg;base64,${avatar}`}
              roundedColor='#242322'
              imageWidth='70'
              imageHeight='70'
              roundedSize='8'
            />
            <div>
              <div className={`${classes.flex}`}>
                <Typography className={`${classes.text} ${classes.headerText}`}>
                  {username}
                </Typography>
                <div className={`${classes.flex} ${classes.ratingContainer}`}>
                  <Rating value={rating} size='small' readOnly={true} />
                </div>
              </div>
              <div className={classes.dateContainer}>
                <Typography className={`${classes.text} ${classes.dateText}`}>
                  {new Date(publishDate).toLocaleString()}
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.flex}>
            <div className={classes.menuContainer}>
              <CommentMenuContainer />
            </div>
          </div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.textContainer}>
          <Typography className={`${classes.text} ${classes.commentText}`}>
            {text}
          </Typography>
        </div>
      </div>
    </Container>
  );
};

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  publishDate: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Comment;
