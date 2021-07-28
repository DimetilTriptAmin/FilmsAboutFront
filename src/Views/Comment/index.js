import { Container, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Oval } from "@agney/react-loading";
import ReactRoundedImage from "react-rounded-image";
import CommentMenuContainer from "../../Containers/CommentMenuContainer";
import useStyles from "./styles";

const Comment = ({ username, userRate, publishDate, text, isLoading }) => {
  const classes = useStyles();
  return (
    <Container className={classes.commentContainer}>
      {!isLoading ? (
        <div>
          <div className={`${classes.flex} ${classes.header}`}>
            <div className={`${classes.flex} ${classes.userContainer}`}>
              <ReactRoundedImage
                image='https://lh3.googleusercontent.com/proxy/IhI4vMI8g6bbbH2SENxbXfHhB6YTrJYvR6rJc8PzlC1ULA3xxPExZPduaUF3DQVwTgsmUmL0GN3WkffT9v1Slr7Fbjbt57D4E573yxFt-kp0'
                roundedColor='#321124'
                imageWidth='70'
                imageHeight='70'
                roundedSize='13'
              />
              <Typography className={`${classes.text} ${classes.headerText}`}>
                {username}
              </Typography>
              <Rating value={userRate} size='small' readOnly={true} />
            </div>
            <div className={classes.flex}>
              <div className={classes.dateContainer}>
                <Typography className={`${classes.text} ${classes.headerText}`}>
                  {new Date(publishDate).toLocaleString()}
                </Typography>
              </div>
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
      ) : (
        <Container className={`${classes.metaComponent} ${classes.flex}`}>
          <Oval width='10' color='#fff' />
        </Container>
      )}
    </Container>
  );
};

export default Comment;
