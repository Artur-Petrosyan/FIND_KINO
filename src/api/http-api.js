import { BASE_URL } from "../constants/api"

export const createGetRequest = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`,{
        method : "GET",
    })
    const data = await response.json()
    return data
}
