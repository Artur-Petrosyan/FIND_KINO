import { GET_SHOW_INFO } from "../../constants/types";

const showInfoReducer = (state = [], { type, data }) => {
    switch (type) {
        case GET_SHOW_INFO: return state;
        default: return state
    }
}

export default showInfoReducer;