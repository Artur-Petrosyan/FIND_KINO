import {BASE_URL} from "src/constants/api";

export const fetchGetRequest = async (endpoint,data) => {
    try {
        let baseUrl = `${BASE_URL}`;
        const response = await fetch(`${baseUrl}${endpoint}`, {
            headers : {
                "Content-Type": "application/json",
            },
            method: "POST",
            body : JSON.stringify(data),
        })
        return await response.json()
    } catch (err) {
        console.log(err);
    }
}