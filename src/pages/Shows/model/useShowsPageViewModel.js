import {useParams} from "react-router-dom";
import useSlicedData from "src/pages/Shows/lib/useSlicedData";
import {API_ENDPOINTS} from "src/constants/api";
import {GET_SHOWS} from "src/constants/types";

export const useShowsPageViewModel = () => {
    const {page} = useParams();
    const {
        setPageNumber,
        sliced,
        data,
        pageNumber,
    } = useSlicedData(API_ENDPOINTS.SHOWS, 'shows', GET_SHOWS, page)
    return {setPageNumber, sliced, data, pageNumber};
};