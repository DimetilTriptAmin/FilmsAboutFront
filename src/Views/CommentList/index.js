import React from 'react';
import Comment from '../Comment';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { Oval } from '@agney/react-loading';
import { ErrorOutline } from '@material-ui/icons';
import useStyles from './styles';

const CommentList = ({ commentList }) => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            {!commentList.isLoading ? (
                commentList.Loaded ? (
                    commentList.values.map((comment, key) => (
                        <Comment
                            username={comment.userName}
                            avatar={comment.avatar}
                            text={comment.text}
                            publishDate={comment.publishDate}
                            rating={comment.rating}
                            key={key}
                        />
                    ))
                ) : (
                    <div className={`${classes.metaComponent} ${classes.flex}`}>
                        <ErrorOutline
                            style={{
                                fontSize: 100,
                                color: '#fff',
                                margin: 'auto',
                            }}
                        />
                    </div>
                )
            ) : (
                <Container
                    className={`${classes.metaComponent} ${classes.flex}`}
                >
                    <Oval width="100" color="#fff" />
                </Container>
            )}
        </Container>
    );
};

CommentList.propTypes = {
    commentList: PropTypes.object.isRequired,
};

export default CommentList;
