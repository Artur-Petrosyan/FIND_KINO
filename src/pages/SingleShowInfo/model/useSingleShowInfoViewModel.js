import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getShowInfo} from "src/redux/actions/asyncGetShowInfo";
import {API_ENDPOINTS} from "src/constants/api";
import {useRenderComponentUsingSwitch} from "../lib";

export function useSingleShowInfoViewModel() {
    const dispatch = useDispatch()
    const {id, info} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (info !== 'main') {
            dispatch(getShowInfo(API_ENDPOINTS.SHOWS, id, info, setIsLoading))
        }
        setIsLoading(false)

    }, [id, info, dispatch])
    const renderComponent = useRenderComponentUsingSwitch(info);
    return {isLoading, renderComponent};
}