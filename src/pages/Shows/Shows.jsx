import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showsSelector } from '../../redux/selectors/shows';
import { getShowes } from '../../redux/actions/asyncGetShowes';
import { API_ENDPOINTS } from '../../constants/api';
import Pagination from '../../components/Pagination/Pagination';
import usePagination from '../../hooks/usePagination'
import { useNavigate, useParams } from 'react-router-dom';
import  navigateToRegex  from '../../utils/navigateToRegex.js';

const Showes = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [pageNumber, setPageNumber] = useState(params.page)

    const shows = useSelector(showsSelector)
    const sliced = usePagination(shows, pageNumber)
    const navigateWithRegex = (id, name) => {
        const newName = navigateToRegex(name)
        return navigate(`${id}/${newName}`)
    }


    useEffect(() => {
        dispatch(getShowes(API_ENDPOINTS.SHOWS))
    }, [dispatch])


    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {sliced.map(({ id, image, name }) =>
                <div key={id} style={{ margin: 20 }} onClick={() => {
                    navigateWithRegex(id,name)
                }}>
                    <img src={image.medium} alt="img" />
                </div>
            )}
            <Pagination shows={shows} pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </div>
    );
};

export default Showes;