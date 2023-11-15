import { SET_SINGLE_SHOW } from "src/constants/types";

const singleShowReducer = (state = [], { type, data }) => {
    switch (type) {
        case SET_SINGLE_SHOW: return [data];
        default: return state
    }
}

export default singleShowReducer;