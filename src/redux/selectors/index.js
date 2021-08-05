export const notificationSelector = (state) => state.notification.notification;
export const filmDataSelector = (state) => state.film;
export const filmCommentsSelector = (state) => state.comments;
export const filmListSelector = (state) => state.filmList;

export const UserRateSelector = (userId) => (state) =>
  state.rating.rating[userId];

export const UserSelector = (userId) => (state) => {
  return state.user.users[userId];
};

export const IsAuthorizedSelector = () =>
  Boolean(window.localStorage.getItem("accessToken"));

export const accessTokenSelector = () =>
  window.localStorage.getItem("accessToken");

// export const logOutSelector = () =>
