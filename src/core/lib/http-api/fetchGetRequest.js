import {BASE_URL} from "src/constants/api";

export const fetchGetRequest = async (endpoint) => {
    try {
        let baseUrl = `${BASE_URL}`;
        const response = await fetch(`${baseUrl}${endpoint}`, {
            method: "GET",
        })
        return await response.json()
    } catch (err) {
        console.log(err);
    }
}