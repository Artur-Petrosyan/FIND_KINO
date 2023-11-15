import { createGetRequestForSingleShow } from "src/api/http-api"
import { SET_SINGLE_SHOW } from "src/constants/types"

export const getSingleShow = (enpoint, id,setIsloading) => async (dispatch) => {
    try {
        setIsloading(true)
        const data = await createGetRequestForSingleShow(enpoint, id)
        dispatch({ type: SET_SINGLE_SHOW, data: data })
        setIsloading(false)

    }
    catch (err) {
        console.log(err);
    }
}