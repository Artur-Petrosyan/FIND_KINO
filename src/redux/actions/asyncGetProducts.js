import { createGetRequest } from "../../api/http-api"
import { GET_PRODUCTS } from "../../constants/types"

export const getProducts = (endpoint) => async (dispatch) => {
    const data = await createGetRequest(endpoint)
    dispatch({ type: GET_PRODUCTS, data: data })
}