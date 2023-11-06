import Card from '../../components/Card/Card';
import Table from '../../components/Table/Table';

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { API_ENDPOINTS } from '../../constants/api';
import { getShowInfo } from '../../redux/actions/asyncGetShowInfo';
import { singleShowInfoSelector } from '../../redux/selectors/singleShowInfo';

import '../../styles/singleShow.scss'

const SingleShowInfo = ({ singleShow }) => {
    const dispatch = useDispatch()
    const { id, info } = useParams()

    const showInfo = useSelector(singleShowInfoSelector)
    const singleShowInfoSeasons = useSelector(state => state.singleShowInfoSeasons)

    useEffect(() => {
        if (info !== 'main') {
            dispatch(getShowInfo(API_ENDPOINTS.SHOWS, id, info))
        }
    }, [id, info, dispatch])


    return (
        <div>
            {info === 'episodes' &&
                <Table showInfo={showInfo} seasons={singleShowInfoSeasons} />
            }
            {info === 'main' &&
                singleShow.map(({ id, name, image, summary }) => (
                    <div key={id} className='content'>
                        <div className='signle-show__name'>
                            <h1>{name}</h1>
                        </div>
                        <div className='single-show' >
                            <div className='single-show__card'>
                                <Card
                                    key={id}
                                    name={name}
                                    image={image?.original}
                                />
                            </div>
                            <div className='single-show__text'><p>
                                {summary}
                            </p></div>
                        </div>
                    </div>
                ))
            }
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