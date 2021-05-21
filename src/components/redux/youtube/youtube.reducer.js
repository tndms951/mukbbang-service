import youtubeTypes from './youtube.types';

const INITAL_STATE = {
  youtubeList: []
};

const youtubeListReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case youtubeTypes.SET_YOUTUBE_LIST: {
      const { list } = action.payload;
      return {
        ...state,
        youtubeList: list
      };
    }
    case youtubeTypes.SET_YOUTUBE_PAGINATION: {
      const { list } = action.payload;
      const paginationList = [...state.youtubeList, ...list];
      return {
        ...state,
        youtubeList: paginationList
      };
    }
    default:
      return state;
  }
};

export default youtubeListReducer;
