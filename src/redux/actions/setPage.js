import { SET_PAGE } from "src/constants/types"

export const setPageAction = (data) => {
    return { type: SET_PAGE, data: data }
}
