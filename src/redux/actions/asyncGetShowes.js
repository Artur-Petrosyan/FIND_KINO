import { createGetRequest } from "src/api/http-api"
import { GET_SHOWS } from "src/constants/types"

export const getShowes = (endpoint,type) => async (dispatch) => {
    try {
        const data = await createGetRequest(endpoint)
        dispatch({ type: GET_SHOWS, data: data })
    }
    catch (err) {
        console.log(err);
    }
}