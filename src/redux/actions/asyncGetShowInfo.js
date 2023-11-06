import { createGetRequestShowInfo } from "../../api/http-api";
import { GET_SHOW_INFO_EPISODES, GET_SHOW_INFO_SEASONS } from "../../constants/types"

export const getShowInfo = (endpoint, id, info) => async (dispatch) => {
    console.log(info);
    try {
        const data = await createGetRequestShowInfo(endpoint, id, info)
        switch (info) {
            case 'episodes': return dispatch({ type: GET_SHOW_INFO_EPISODES, data: data })
            case 'seasons': return dispatch({ type: GET_SHOW_INFO_SEASONS, data: data })
            default: return 
        }
    }
    catch (err) {
        console.log(err);
    }
}