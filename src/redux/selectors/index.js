export const notificationSelector = (state) => state.notification.data;
export const filmDataSelector = (state) => state.film;
export const filmCommentListSelector = (state) => state.commentList;
export const filmListSelector = (state) => state.filmList;

export const userRateSelector = (userId) => (state) =>
  state.ratingList.values[userId];

export const userListSelector = (userId) => (state) => {
  return state.userList.values[userId];
};

export const isAuthorizedSelector = () =>
  Boolean(window.localStorage.getItem("accessToken"));

export const accessTokenSelector = () =>
  window.localStorage.getItem("accessToken");