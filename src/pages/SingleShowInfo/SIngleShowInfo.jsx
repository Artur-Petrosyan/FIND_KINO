import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { API_ENDPOINTS } from 'src/constants/api';
import { getShowInfo } from 'src/redux/actions/asyncGetShowInfo';

import 'src/styles/singleShow.scss'
import ShowEpisodes from 'src/pages/ShowEpisodes/ShowEpisodes';
import ShowMain from 'src/pages/ShowMain/ShowMain';
import ShowSeasons from 'src/pages/ShowSeasons/ShowSeasons';
import ShowCast from 'src/pages/ShowCast/ShowCast';
import {Loader} from 'src/core';
const SingleShowInfo = () => {
    const dispatch = useDispatch()
    const { id, info } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (info !== 'main') {
            dispatch(getShowInfo(API_ENDPOINTS.SHOWS, id, info, setIsLoading))
        }
        setIsLoading(false)

    }, [id, info, dispatch])


    const renderComponent = useMemo(() => {
        switch (info) {
            case 'main': return <ShowMain />;
            case 'episodes': return <ShowEpisodes />;
            case 'seasons': return <ShowSeasons />;
            case 'cast': return <ShowCast />;
            default: return <ShowMain />
        }
    }, [info])

    return (
        <div>
            {isLoading ? <Loader /> : renderComponent}
        </div>
    );
};

export default SingleShowInfo;