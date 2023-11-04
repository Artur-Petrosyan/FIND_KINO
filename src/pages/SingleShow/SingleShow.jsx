import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleShow } from '../../redux/actions/asyncSingleShow';
import { API_ENDPOINTS } from '../../constants/api';

const SingleShow = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        dispatch(getSingleShow(API_ENDPOINTS.SHOWS, id))
    }, [dispatch, id])
    return (
        <div>

        </div>
    );
};

export default SingleShow;