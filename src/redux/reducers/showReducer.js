import { GET_SHOWS } from "src/constants/types";

const showReducer = (state = [], { type, data }) => {
    switch (type) {
        case GET_SHOWS: return data;
        default: return state
    }
}

export default showReducer;