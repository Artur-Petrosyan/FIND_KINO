import {fetchGetRequest} from "../core/lib/http-api/fetchGetRequest";



export const createGetRequest = async (endpoint) => {
    return fetchGetRequest(endpoint)
}

export const createGetRequestForSingleShow = async (endpoint, id) => {
    const endpoints = `${endpoint}/${id}`
    return fetchGetRequest(endpoints)
}

export const createGetRequestShowInfo = async (endpoint, id, info) => {
    const endpoints = `${endpoint}/${id}/${info}`
    return fetchGetRequest(endpoints)
}


export const createGetRequestSearch = async (searchQuery) => {
const endpoint = `search/shows?q=${searchQuery}`
return fetchGetRequest(endpoint)
}