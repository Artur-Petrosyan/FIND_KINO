import { combineReducers } from "@reduxjs/toolkit";
import showReducer from "./showReducer";

const rootReducer = combineReducers({
    showes: showReducer
})

export default rootReducer