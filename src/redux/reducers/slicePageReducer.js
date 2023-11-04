import { SET_PAGE } from "../../constants/types";

const slicePageReducer = (state = [], { type, data }) => {
    switch (type) {
        case SET_PAGE: return data;
        default: return state
    }
}

export default slicePageReducer;