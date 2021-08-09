export const notificationSelector = (state) => state.notification.data;
export const filmDataSelector = (state) => state.film;
export const filmCommentListSelector = (state) => state.commentList;
export const filmListSelector = (state) => state.filmList;

export const usernameSelector = (state) => state.user.name;

export const userRatingSelector = (state) => state.user.currentFilmRating;

export const isAuthorizedSelector = () =>
    Boolean(window.localStorage.getItem('accessToken'));

export const accessTokenSelector = () =>
    window.localStorage.getItem('accessToken');
