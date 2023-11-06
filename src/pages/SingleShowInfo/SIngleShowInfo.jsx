import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/singleShow.scss'
import { useDispatch, useSelector } from 'react-redux';
import { API_ENDPOINTS } from '../../constants/api';

import { getShowInfo } from '../../redux/actions/asyncGetShowInfo';
import Card from '../../components/Card/Card';
import { singleShowInfoSelector } from '../../redux/selectors/singleShowInfo';
import Table from '../../components/Table/Table';

const SingleShowInfo = ({ singleShow }) => {
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
            {info === 'episodes' &&
                <Table showInfo={showInfo} />
                // showInfo.map(({ id, name, image, summary, rating }) => (
                //     <Card
                //         key={id}
                //         name={name}
                //         image={image?.original}

                //     />
                // ))
            }
            {
                info === 'main' &&
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

        </div>
    );
};

export default SingleShowInfo;