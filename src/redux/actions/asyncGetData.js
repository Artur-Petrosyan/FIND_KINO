import {EazyRequest} from "eazyrequest";
import {BASE_URL} from "src/constants/api";
const api = new EazyRequest(BASE_URL)
export const getData = (endpoint,type,setIsLoading) => async (dispatch) => {
    try {
        setIsLoading(true)
        const data = await api.get(endpoint)
        dispatch({ type: type, data: data })
        setIsLoading(false)
    }
    catch (err) {
        console.log(err);
    }
}
