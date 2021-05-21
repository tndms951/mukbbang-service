import youtubeTypes from './youtube.types';

export const setYoutubeList = (list) => ({
  type: youtubeTypes.SET_YOUTUBE_LIST,
  payload: {
    list
  }
});

export const setYoutubePagination = (list) => ({
  type: youtubeTypes.SET_YOUTUBE_PAGINATION,
  payload: {
    list
  }
});
