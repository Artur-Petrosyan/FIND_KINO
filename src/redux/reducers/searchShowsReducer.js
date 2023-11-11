import { GET_SEARCH_SHOWS } from "../../constants/types";

const searchShowReducer = (state = [], {type ,data}) => {
switch(type) {
    case GET_SEARCH_SHOWS : return data;
    default : return state
}
}

export default searchShowReducer;