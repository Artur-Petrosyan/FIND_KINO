import { combineReducers } from "@reduxjs/toolkit";
import showReducer from "./showReducer";
import slicePageReducer from "./slicePageReducer";
import singleShowReducer from "./singleShowReducer";
const rootReducer = combineReducers({
    shows: showReducer,
    slicedShows: slicePageReducer,
    singleShow: singleShowReducer
})

export default rootReducer