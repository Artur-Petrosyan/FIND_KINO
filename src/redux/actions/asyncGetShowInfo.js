import { createGetRequestShowInfo } from "src/api/http-api";
import { GET_SHOW_INFO } from "src/constants/types"

export const getShowInfo = (endpoint, id, info,setIsLoading) => async (dispatch) => {
    try {
        const data = await createGetRequestShowInfo(endpoint, id, info)
        dispatch({ type: GET_SHOW_INFO, data: data, info })
        setIsLoading(false)
    }
    catch (err) {
        console.log(err);
    }
}