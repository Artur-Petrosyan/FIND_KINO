import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { dataSelector } from "../redux/selectors/shows"
import sliceForPagination from "./usePagination"
import navigateToRegex from "../utils/navigateToRegex"
import { setPageAction } from "../redux/actions/setPage"
import { getData } from "../redux/actions/asyncGetData"

const useSlicedData = (endpoint, nameForSelector, type) => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading, setIsloading] = useState(true)
    const [pageNumber, setPageNumber] = useState(Number(params.page))

    const data = useSelector((state) => dataSelector(state, nameForSelector))

    const sliced = useMemo(() => {
        return sliceForPagination(data, Number(pageNumber))
    }, [data, pageNumber])


    const navigateWithRegex = (id, name) => {
        const newName = navigateToRegex(name)
        return navigate(`${id}/${newName}/main`)
    }


    useEffect(() => {
        dispatch(getData(endpoint, type, setIsloading))
    }, [dispatch, endpoint, type])

    useEffect(() => {
        dispatch(setPageAction(sliced))
    }, [dispatch, sliced])


    return { setPageNumber, navigateWithRegex, sliced, data, pageNumber, isLoading }

}

export default useSlicedData;