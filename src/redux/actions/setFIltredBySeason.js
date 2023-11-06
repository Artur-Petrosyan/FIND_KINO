import { SET_FILTRED_BY_SEASON } from "../../constants/types"

export const setFiltredBySeason = (data) => {
    return { type: SET_FILTRED_BY_SEASON, data: data, info: 'filtredBySeasons' }
}