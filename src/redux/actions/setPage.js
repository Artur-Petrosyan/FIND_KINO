import { SET_PAGE } from "../../constants/types"

export const setPageAction = (data) => {
    return { type: SET_PAGE, data: data }
}
