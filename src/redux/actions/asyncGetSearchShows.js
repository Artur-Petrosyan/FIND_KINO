import { createGetRequestSearch } from "../../api/http-api";
import { GET_SEARCH_SHOWS } from "../../constants/types";

const getSearchShows = (query) => async (dispatch) => {
    try{
       const data = await createGetRequestSearch(query)
       dispatch({type : GET_SEARCH_SHOWS, data : data})
    }
    catch (e) {
        console.log(e);
    }
}

export default getSearchShows;