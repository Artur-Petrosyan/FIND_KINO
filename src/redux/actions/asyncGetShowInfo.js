import { GET_SHOW_INFO } from "src/constants/types"
import {EazyRequest} from "eazyrequest";
import {BASE_URL} from "src/constants/api";
const api = new EazyRequest(BASE_URL)
export const getShowInfo = (endpoint, id, info,setIsLoading) => async (dispatch) => {
    try {
        const data = await api.get(`${endpoint}/${id}/${info}`)
        dispatch({ type: GET_SHOW_INFO, data: data, info })
        setIsLoading(false)
    }
    catch (err) {
        console.log(err);
    }
}