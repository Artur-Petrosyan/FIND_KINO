import { createGetRequestForSingleShow } from "../../api/http-api"
import { SET_SINGLE_SHOW } from "../../constants/types"

export const getSingleShow = (enpoint, id) => async (dispatch) => {
    try {
        const data = await createGetRequestForSingleShow(enpoint, id)
        dispatch({ type: SET_SINGLE_SHOW, data: data })
    }
    catch (err) {
        console.log(err);
    }
}