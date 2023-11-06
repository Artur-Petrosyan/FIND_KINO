import {GET_SHOW_INFO_SEASONS } from "../../constants/types";

const showInfoSeasonsReducer = (state = [], { type, data }) => {
    switch (type) {
        case GET_SHOW_INFO_SEASONS : return data;
        default: return state
    }
}

export default showInfoSeasonsReducer;