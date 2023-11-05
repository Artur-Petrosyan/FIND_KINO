import { createGetRequestShowInfo } from "../../api/http-api"
import { GET_SHOW_INFO } from "../../constants/types"

export const getShowInfo = (endpoint, id, info) => async (dispatch) => {
    try {
        const data = await createGetRequestShowInfo(endpoint, id, info)
        dispatch({ type: GET_SHOW_INFO, data: data })
    }
    catch (err) {
        console.log(err);
    }
}