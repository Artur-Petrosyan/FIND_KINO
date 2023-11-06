import { combineReducers } from "@reduxjs/toolkit";
import showReducer from "./showReducer";
import slicePageReducer from "./slicePageReducer";
import singleShowReducer from "./singleShowReducer";
import showInfoReducer from "./showInfoReducer";
const rootReducer = combineReducers({
    shows: showReducer,
    slicedShows: slicePageReducer,
    singleShow: singleShowReducer,
    showInfo  : showInfoReducer,
})

export default rootReducer