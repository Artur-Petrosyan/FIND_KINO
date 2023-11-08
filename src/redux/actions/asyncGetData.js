import { createGetRequest } from "../../api/http-api"

export const getData = (endpoint,type) => async (dispatch) => {
    try {
        const data = await createGetRequest(endpoint)
        dispatch({ type: type, data: data })
    }
    catch (err) {
        console.log(err);
    }
}
