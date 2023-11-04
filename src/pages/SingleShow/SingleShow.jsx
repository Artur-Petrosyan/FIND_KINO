import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleShow } from '../../redux/actions/asyncSingleShow';
import { API_ENDPOINTS } from '../../constants/api';
import { singleShowSelector } from '../../redux/selectors/singleShow';
import Card from '../../components/Card/Card'
const SingleShow = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const singleShow = useSelector(singleShowSelector)
    useEffect(() => {
        dispatch(getSingleShow(API_ENDPOINTS.SHOWS, id))
    }, [dispatch, id])
    return (
        <div>
            {singleShow.map(({ id, name, image }) => {
                return (
                    <Card
                        key={id}
                        name={name}
                        image={image.original}
                    />
                )
            })}
        </div>
    );
};

export default SingleShow;