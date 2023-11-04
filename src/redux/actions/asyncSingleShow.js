import { createGetRequsetForSingleShow } from "../../api/http-api"
import { SET_SINGLE_SHOW } from "../../constants/types"

export const getSingleShow = (enpoint, id) => async (dispatch) => {
    const data = await createGetRequsetForSingleShow(enpoint, id)
    dispatch({ SET_SINGLE_SHOW, data })
}

