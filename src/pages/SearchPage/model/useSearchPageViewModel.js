import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchShowsSelector} from "src/redux/selectors/searchShows";
import getSearchShows from "src/redux/actions/asyncGetSearchShows";

export function useSearchPageViewModel() {
    const location = useLocation()
    const search = new URLSearchParams(location.search)
    const query = search.get('q')
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const searchShows = useSelector(searchShowsSelector)
    useEffect(() => {
        dispatch(getSearchShows(query, setIsLoading))
    }, [query, dispatch])
    return {isLoading, navigate, searchShows};
}