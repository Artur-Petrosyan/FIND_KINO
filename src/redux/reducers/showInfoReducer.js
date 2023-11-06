import { GET_SHOW_INFO } from "../../constants/types";
const initialState = {
    episodes: [],
    seasons: [],
    cast: [],
    crew: [],
}

const showInfoReducer = (state = initialState, { type, data, info }) => {
    switch (type) {
        case GET_SHOW_INFO: return {
            ...state,
            [info]: data
        };
        default: return state
    }
}

export default showInfoReducer;