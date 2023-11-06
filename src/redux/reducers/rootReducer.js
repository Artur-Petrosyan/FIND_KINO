import { combineReducers } from "@reduxjs/toolkit";
import showReducer from "./showReducer";
import slicePageReducer from "./slicePageReducer";
import singleShowReducer from "./singleShowReducer";
import showInfoEpisodesReducer from "./showInfoReducer";
import showInfoSeasonsReducer from "./showInfoSeasonsReducer";
const rootReducer = combineReducers({
    shows: showReducer,
    slicedShows: slicePageReducer,
    singleShow: singleShowReducer,
    singleShowInfoEpisodes: showInfoEpisodesReducer,
    singleShowInfoSeasons: showInfoSeasonsReducer,

})

export default rootReducer