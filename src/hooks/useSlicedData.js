import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dataSelector } from "../redux/selectors/shows"
import { setPageAction } from "../redux/actions/setPage"
import { getData } from "../redux/actions/asyncGetData"
import {sliceForPagination} from "../core/lib/sliceForPagination";

const useSlicedData = (endpoint, nameForSelector, type, page) => {
    const dispatch = useDispatch()
    const [isLoading, setIsloading] = useState(true)
    const [pageNumber, setPageNumber] = useState(Number(page))

    const data = useSelector((state) => dataSelector(state, nameForSelector))

    const sliced = useMemo(() => {
        return sliceForPagination(data, Number(page))
    }, [data, page])

    useEffect(() => {
        dispatch(getData(endpoint, type, setIsloading))
    }, [dispatch, endpoint, type])

    useEffect(() => {
        dispatch(setPageAction(sliced))
    }, [dispatch, sliced])


    return { setPageNumber, sliced, data, isLoading, pageNumber }

}

export default useSlicedData;