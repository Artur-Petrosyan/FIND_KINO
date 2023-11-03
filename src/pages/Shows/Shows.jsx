import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showsSelector } from '../../redux/selectors/showes';
import { getShowes } from '../../redux/actions/asyncGetShowes';
import { API_ENDPOINTS } from '../../constants/api';

const Showes = () => {
    const dispatch = useDispatch()
    const shows = useSelector(showsSelector)

    useEffect(() => {
        dispatch(getShowes(API_ENDPOINTS.SHOWS))
    }, [dispatch])
    return (
        <div>
            {shows.map(({ id, name }) =>
                <h1 key={id}>{name}</h1>
            )}
        </div>
    );
};

export default Showes;