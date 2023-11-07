import { createGetRequest } from "../../api/http-api"
import { GET_PEOPLES } from "../../constants/types"

export const getPeoples = (endpoint) => async (dispatch) => {
    const data = await createGetRequest(endpoint)
    dispatch({ type: GET_PEOPLES, data: data })
}