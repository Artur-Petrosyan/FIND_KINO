import { SET_SINGLE_SHOW } from "src/constants/types"
import {EazyRequest} from "eazyrequest";
import {BASE_URL} from "src/constants/api";
const api = new EazyRequest(BASE_URL)
export const getSingleShow = (enpoint, id,setIsloading) => async (dispatch) => {
    try {
        setIsloading(true)
        const data = await api.get(`${enpoint}/${id}`)
        dispatch({ type: SET_SINGLE_SHOW, data: data })
        setIsloading(false)
    }
    catch (err) {
        console.log(err);
    }
}