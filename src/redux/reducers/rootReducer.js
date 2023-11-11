import { combineReducers } from "@reduxjs/toolkit";
import showReducer from "./showReducer";
import slicePageReducer from "./slicePageReducer";
import singleShowReducer from "./singleShowReducer";
import showInfoReducer from "./showInfoReducer";
import peoplesReducer from "./peopleReducer";
import searchShowReducer from "./searchShowsReducer";
const rootReducer = combineReducers({
    shows: showReducer,
    slicedShows: slicePageReducer,
    singleShow: singleShowReducer,
    showInfo: showInfoReducer,
    peoples: peoplesReducer,
    searchShows: searchShowReducer,
})

export default rootReducer