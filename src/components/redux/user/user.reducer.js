import UseTypes from './user.types';

const INITAL_STATE = {
  currentUser: null,
  token: ''
};

const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case UseTypes.SET_CUTTENT_USER: {
      const { user, token } = action.payload; // 액션에 넘어온 user, token
      localStorage.setItem('userToken', token);

      return {
        ...state,
        currentUser: user,
        token
      };
    }
    case UseTypes.SET_LOGOUT: {
      localStorage.removeItem('userToken');
      return {
        ...state,
        token: '',
        currentUser: null
      };
    }
    default:
      return state;
  }
};

export default userReducer;
