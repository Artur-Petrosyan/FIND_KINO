
/**
 * Custom hook that returns the view model for the people page.
 * @returns {Object} An object containing the setPageNumber function, sliced data, data, page number, loading status, select options, and a function to set the filtered by gender state.
 */
import {useParams} from "react-router-dom";
import useSlicedData from "pages/Shows/lib/useSlicedData";
import {API_ENDPOINTS} from "src/constants/api";
import {GET_PEOPLES} from "src/constants/types";
import {useState} from "react";

export const usePeoplePageViewModel = () => {
    const {page} = useParams()
    const {
        setPageNumber,
        sliced,
        data,
        pageNumber,
        isLoading
    } = useSlicedData(API_ENDPOINTS.PEOPLES, 'peoples', GET_PEOPLES, page)

    const selectOptions = [
        {value: "All Persons", label: "All Persons"},
        {value: 'Male', label: 'Male'},
        {value: 'Female', label: 'Female'},

    ]

    const [filtredByGender, setFiltredByGender] = useState([])
    return {setPageNumber, sliced, data, pageNumber, isLoading, selectOptions, setFiltredByGender};
};