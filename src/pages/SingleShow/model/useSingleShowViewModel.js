import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {getSingleShow} from "src/redux/actions/asyncSingleShow";
import {API_ENDPOINTS} from "src/constants/api";

export const useSingleShowViewModel = () => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const navigateTo = (name) => {
        const path = name.toLowerCase()
        navigate(`${path}`)
    }
    const {id} = useParams()

    useEffect(() => {
        dispatch(getSingleShow(API_ENDPOINTS.SHOWS, id, setIsLoading))
    }, [dispatch, id])
    return {isLoading, navigateTo};
};