import UserTypes from './user.types';

// user정보
export const setCurrentUser = (user, token) => ({
  type: UserTypes.SET_CUTTENT_USER,
  payload: {
    user,
    token
  }
});

// 로그아웃
export const setLogout = () => ({
  type: UserTypes.SET_LOGOUT
});
