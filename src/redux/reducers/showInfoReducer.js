import { GET_SHOW_INFO, SET_FILTRED_BY_SEASON } from "src/constants/types";
const initialState = {
    episodes: [],
    seasons: [],
    cast: [],
    crew: [],
    filtredBySeasons: []
}

const showInfoReducer = (state = initialState, { type, data, info }) => {
    switch (type) {
        case GET_SHOW_INFO: return {
            ...state,
            [info]: data
        };
        case SET_FILTRED_BY_SEASON: return {
            ...state,
            [info]: data
        };
        default: return state
    }
}

export default showInfoReducer;