import { BASE_URL } from "../constants/api"

export const fetchGet = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "GET",
        })
        const data = await response.json()
        return data
    }
    catch (err) {
        console.log(err);
    }
}


export const createGetRequest = async (endpoint) => {
    return fetchGet(endpoint)
}

export const createGetRequsetForSingleShow = async (endpoint, id) => {
    const endpoints = `${endpoint}/${id}`
    return fetchGet(endpoints)
}

export const createGetById = async (endpoint, id) => {
    const endpoints = `${endpoint}/${id}`
    return fetchGet(endpoints)
}