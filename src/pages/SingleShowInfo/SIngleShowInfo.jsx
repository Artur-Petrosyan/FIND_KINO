import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { API_ENDPOINTS } from '../../constants/api';

import { getShowInfo } from '../../redux/actions/asyncGetShowInfo';
import Card from '../../components/Card/Card';
import { singleShowInfoSelector } from '../../redux/selectors/singleShowInfo';

const SingleShowInfo = () => {
    const dispatch = useDispatch()
    const { id, info } = useParams()
    const showInfo = useSelector(singleShowInfoSelector)
 
    useEffect(() => {
        if (info) {
            dispatch(getShowInfo(API_ENDPOINTS.SHOWS, id, info))
        }
    },[id,info,dispatch])
    return (
        <div>
            {showInfo.map(({ id, name, image }) => (
                <Card
                    key={id}
                    name={name}
                    image={image?.original}
                />
            ))}
        </div>
    );
};

export default SingleShowInfo;