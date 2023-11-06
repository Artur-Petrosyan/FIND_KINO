import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { API_ENDPOINTS } from '../../constants/api';
import { getShowInfo } from '../../redux/actions/asyncGetShowInfo';
import { singleShowInfoSelector } from '../../redux/selectors/singleShowInfo';

import '../../styles/singleShow.scss'
import ShowEpisodes from '../ShowEpisodes/ShowEpisodes';
import ShowMain from '../ShowMain/ShowMain';

const SingleShowInfo = () => {
    const dispatch = useDispatch()
    const { id, info } = useParams()
    const showInfo = useSelector(singleShowInfoSelector)
    useEffect(() => {
        if (info !== 'main') {
            dispatch(getShowInfo(API_ENDPOINTS.SHOWS, id, info))
        }
    }, [id, info, dispatch])


    return (
        <div>
            {info === 'episodes' && <ShowEpisodes />}
            {info === 'main' && <ShowMain />}
            {info === 'seasons' &&
                showInfo[info].map(({ id, image, number }) => <div key={id} style={{ display: 'flex' }}>
                    <div>
                        <img src={image?.medium} alt="" />
                    </div>
                    <div>
                        <h1>
                            Season {number}
                        </h1>
                    </div>
                </div>)
            }
            {info === 'cast' &&
                showInfo[info].map(({ person, character }) => <div key={person.id} style={{ display: 'flex' }}>
                    <div>
                        <img src={person.image?.medium} alt="" />
                    </div>
                    <div>
                        <h1 >
                            {person.name} as {character.name}
                        </h1>
                    </div>
                </div>)
            }
        </div>
    );
};

export default SingleShowInfo;