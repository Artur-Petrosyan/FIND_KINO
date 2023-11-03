import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showsSelector } from '../../redux/selectors/shows';
import { getShowes } from '../../redux/actions/asyncGetShowes';
import { API_ENDPOINTS } from '../../constants/api';
import Pagination from '../../components/Pagination/Pagination';
import usePagination from '../../hooks/usePagination'
import { useParams } from 'react-router-dom';
const Showes = () => {
    const params = useParams()
    const [pageNumber, setPageNumber] = useState(params.page)

    const dispatch = useDispatch()
    const shows = useSelector(showsSelector)
    const sliced = usePagination(shows, pageNumber)
    useEffect(() => {
        dispatch(getShowes(API_ENDPOINTS.SHOWS))
       
    }, [dispatch])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {sliced.map(({ id, image, name }) =>
                <div key={id} style={{ margin: 20 }}>
                    <img src={image.medium} alt="" />
                </div>
            )}
            <Pagination shows={shows} pageNumber={pageNumber}  setPageNumber={setPageNumber}/>
        </div>
    );
};

export default Showes;