import {useParams} from "react-router-dom";
import useSlicedData from "../../../hooks/useSlicedData";
import {API_ENDPOINTS} from "../../../constants/api";
import {GET_PEOPLES} from "../../../constants/types";
import {useState} from "react";

export function usePeoplePageViewModel() {
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
}