import {BASE_URL} from "src/constants/api";

export const fetchPostRequest = async (endpoint,data) => {
    try {
        let baseUrl = `${BASE_URL}`;
        const response = await fetch(`${baseUrl}${endpoint}`, {
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(data),
            method: "POST",
        })
        return await response.json()
    } catch (err) {
        console.log(err);
    }
}