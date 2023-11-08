import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { showsSelector } from "../redux/selectors/shows"
import sliceForPagination from "./usePagination"
import navigateToRegex from "../utils/navigateToRegex"
import { API_ENDPOINTS } from "../constants/api"
import { getShowes } from "../redux/actions/asyncGetShowes"
import { setPageAction } from "../redux/actions/setPage"

const useSlicedData = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [pageNumber, setPageNumber] = useState(Number(params.page))

    const shows = useSelector(showsSelector)


    const sliced = useMemo(() => {
        return sliceForPagination(shows, Number(pageNumber))
    }, [pageNumber, shows])


    const navigateWithRegex = (id, name) => {
        const newName = navigateToRegex(name)
        return navigate(`${id}/${newName}/main`)
    }


    useEffect(() => {
        dispatch(getShowes(API_ENDPOINTS.SHOWS))
    }, [dispatch])

    useEffect(() => {
        dispatch(setPageAction(sliced))
    }, [dispatch, sliced])


    return { setPageNumber, navigateWithRegex, sliced }

}

export default useSlicedData;