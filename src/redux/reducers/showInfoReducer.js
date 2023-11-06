import { GET_SHOW_INFO_EPISODES } from "../../constants/types";

const showInfoEpisodesReducer = (state = [], { type, data }) => {
    switch (type) {
        case GET_SHOW_INFO_EPISODES: return data;
        default: return state
    }
}

export default showInfoEpisodesReducer;