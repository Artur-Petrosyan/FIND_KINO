import { createGetRequest } from "../../api/http-api"
import { GET_SHOWS } from "../../constants/types"

export const getShowes = (endpoint) => async (dispatch) => {
    const data = await createGetRequest(endpoint)
    dispatch({ type: GET_SHOWS, data: data })
}