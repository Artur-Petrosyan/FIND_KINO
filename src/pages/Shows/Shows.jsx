import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { API_ENDPOINTS } from '../../constants/api';

import { showsSelector } from '../../redux/selectors/shows';
import { getShowes } from '../../redux/actions/asyncGetShowes';
import { setPageAction } from '../../redux/actions/setPage.js';


import sliceForPagination from '../../hooks/usePagination'
import navigateToRegex from '../../utils/navigateToRegex.js';

import Pagination from '../../components/Pagination/Pagination';
import Card from '../../components/Card/Card.jsx';

import '../../styles/shows.scss'

const Showes = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [pageNumber, setPageNumber] = useState(params.page)

    const shows = useSelector(showsSelector)


    const sliced = useMemo(() => {
        return sliceForPagination(shows, pageNumber)
    }, [pageNumber, shows])


    const navigateWithRegex = (id, name) => {
        const newName = navigateToRegex(name)
        return navigate(`${id}/${newName}/main`)
    }


    useEffect(() => {
        dispatch(getShowes(API_ENDPOINTS.SHOWS))
    }, [dispatch])

    useEffect(() => {
        dispatch(setPageAction(sliced))
    }, [dispatch, sliced])
    
    return (
        <div className='content'>
            <div className='shows'>
                {sliced.map(({ id, image, name, rating }) =>
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        image={image.original}
                        navigateWithRegex={navigateWithRegex}
                        rating={rating.average}
                    />
                )}
            </div>
            <Pagination shows={shows} pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </div>
    );
};

export default Showes;