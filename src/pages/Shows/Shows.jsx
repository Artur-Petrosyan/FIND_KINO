import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showsSelector } from '../../redux/selectors/showes';
import { getShowes } from '../../redux/actions/asyncGetShowes';
import { API_ENDPOINTS } from '../../constants/api';

const Showes = () => {
    const dispatch = useDispatch()
    const products = useSelector(showsSelector)

    useEffect(() => {
        dispatch(getShowes(API_ENDPOINTS.SHOWS))
    }, [dispatch])
    return (
        <div>
            {products.map(({ id, title }) =>
                <h1 key={id}>{title}</h1>
            )}
        </div>
    );
};

export default Showes;