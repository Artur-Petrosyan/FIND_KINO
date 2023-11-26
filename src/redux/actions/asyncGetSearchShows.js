import { GET_SEARCH_SHOWS } from "src/constants/types";
import {EazyRequest} from "eazyrequest";
import {BASE_URL} from "src/constants/api";
const api = new EazyRequest(BASE_URL)
const getSearchShows = (query, setIsLoading) => async (dispatch) => {
    try {
        setIsLoading(true)
        const data = await api.getByParams('search/shows',{
            q : query
        })
        dispatch({ type: GET_SEARCH_SHOWS, data: data })
        setIsLoading(false)
    }
    catch (e) {
        console.log(e);
    }
}

export default getSearchShows;