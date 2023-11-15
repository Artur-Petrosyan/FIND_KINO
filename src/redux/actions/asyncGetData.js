import { createGetRequest } from "src/api/http-api"

export const getData = (endpoint,type,setIsLoading) => async (dispatch) => {
    try {
        setIsLoading(true)
        const data = await createGetRequest(endpoint)
        dispatch({ type: type, data: data })
        setIsLoading(false)
    }
    catch (err) {
        console.log(err);
    }
}
