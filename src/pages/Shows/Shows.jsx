import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showsSelector } from '../../redux/selectors/shows';
import { getShowes } from '../../redux/actions/asyncGetShowes';
import { API_ENDPOINTS } from '../../constants/api';
import Pagination from '../../components/Pagination/Pagination';
import usePagination from '../../hooks/usePagination'
const Showes = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const dispatch = useDispatch()
    const shows = useSelector(showsSelector)
    const slicedShows = usePagination(shows, pageNumber)

    useEffect(() => {
        dispatch(getShowes(API_ENDPOINTS.SHOWS))
    }, [dispatch])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {slicedShows.map(({ id, image, name }) =>
                <div key={id} style={{ margin: 20 }}>
                    <img src={image.medium} alt="" />
                </div>
            )}
            <Pagination shows={shows} setPageNumber={setPageNumber} pageNumber={pageNumber} />
        </div>
    );
};

export default Showes;