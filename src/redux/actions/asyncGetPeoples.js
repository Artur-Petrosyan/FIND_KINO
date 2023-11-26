import { GET_PEOPLES } from "src/constants/types"
import {EazyRequest} from "eazyrequest";
import {BASE_URL} from "src/constants/api";
const api = new EazyRequest(BASE_URL)
export const getPeoples = (endpoint, setIsLoading) => async (dispatch) => {
    const data = await api.get(endpoint)
    dispatch({ type: GET_PEOPLES, data: data })
    setIsLoading(false)
}