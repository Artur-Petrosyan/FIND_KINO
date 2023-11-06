import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { API_ENDPOINTS } from '../../constants/api';
import { getShowInfo } from '../../redux/actions/asyncGetShowInfo';

import '../../styles/singleShow.scss'
import ShowEpisodes from '../ShowEpisodes/ShowEpisodes';
import ShowMain from '../ShowMain/ShowMain';
import ShowSeasons from '../ShowSeasons/ShowSeasons';
import ShowCast from '../ShowCast/ShowCast';
import Loader from '../../components/Loader/Loader';
const SingleShowInfo = () => {
    const dispatch = useDispatch()
    const { id, info } = useParams()
    useEffect(() => {
        if (info !== 'main') {

            dispatch(getShowInfo(API_ENDPOINTS.SHOWS, id, info))
        }
    }, [id, info, dispatch])
    const [isLoading, setIsLoading] = useState(true)


    const renderComponent = (info) => {
        switch (info) {
            case 'main': return <ShowMain />;
            case 'episodes': return <ShowEpisodes />;
            case 'seasons': return <ShowSeasons />;
            case 'cast': return <ShowCast />;
            default: return <ShowMain />
        }
    }


    return (
        <div>
            {isLoading ? <Loader /> : renderComponent(info)}
        </div>
    );
};

export default SingleShowInfo;