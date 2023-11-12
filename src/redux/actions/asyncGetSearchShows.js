import { createGetRequestSearch } from "../../api/http-api";
import { GET_SEARCH_SHOWS } from "../../constants/types";

const getSearchShows = (query, setIsLoading) => async (dispatch) => {
    try {
        setIsLoading(true)
        const data = await createGetRequestSearch(query)
        dispatch({ type: GET_SEARCH_SHOWS, data: data })
        setIsLoading(false)
    }
    catch (e) {
        console.log(e);
    }
}

export default getSearchShows;