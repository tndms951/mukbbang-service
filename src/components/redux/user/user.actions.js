import UserTypes from './user.types';

export const setCurrentUser = (user, token) => ({
  type: UserTypes.SET_CUTTENT_USER,
  payload: {
    user,
    token
  }
});

export const setLogout = () => ({
  type: UserTypes.SET_LOGOUT
});
