import { BASE_URL } from "../constants/api"

export const fetchGet = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: "GET",
    })
    const data = await response.json()
    return data
}


export const createGetRequest = async (endpoint) => {
    return fetchGet(endpoint)
}


export const createGetRequsetWithParams = async (endpoint, offset, limit) => {
    const endpoints = `${endpoint}/?offset=${offset}&limit=${limit}`
    return fetchGet(endpoints)
}


export const createGetById = async (endpoint, id) => {
    const endpoints = `${endpoint}/${id}`
    return fetchGet(endpoints)
}