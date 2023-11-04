import { combineReducers } from "@reduxjs/toolkit";
import showReducer from "./showReducer";
import slicePageReducer from "./slicePageReducer";

const rootReducer = combineReducers({
    shows: showReducer,
    slicedShows: slicePageReducer
})

export default rootReducer