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

export const createGetRequestForSingleShow = async (endpoint, id) => {
    const endpoints = `${endpoint}/${id}`
    return fetchGet(endpoints)
}

export const createGetRequestShowInfo = async (endpoint, id, info) => {
    const endpoints = `${endpoint}/${id}/${info}`
    return fetchGet(endpoints)
}


export const createGetRequestSearch = async (searchQuery) => {
const endpoint = `search/shows?q=${searchQuery}`
return fetchGet(endpoint)
}