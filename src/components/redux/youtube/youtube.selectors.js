import { createSelector } from 'reselect';

const selectYoutube = (state) => state.youtube;

export const selectYoutubeList = createSelector([selectYoutube], (list) => list.youtubeList);
