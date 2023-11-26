import { GET_SHOWS } from "src/constants/types"
import {EazyRequest} from "eazyrequest";
import {BASE_URL} from "src/constants/api";
const api = new EazyRequest(BASE_URL)
export const getShowes = (endpoint,type) => async (dispatch) => {
    try {
        const data = await api.get(endpoint)
        dispatch({ type: GET_SHOWS, data: data })
    }
    catch (err) {
        console.log(err);
    }
}