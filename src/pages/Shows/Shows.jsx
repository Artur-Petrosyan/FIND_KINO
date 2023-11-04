import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showsSelector } from '../../redux/selectors/shows';
import { getShowes } from '../../redux/actions/asyncGetShowes';
import { API_ENDPOINTS } from '../../constants/api';
import Pagination from '../../components/Pagination/Pagination';
import sliceForPagination from '../../hooks/usePagination'
import { useNavigate, useParams } from 'react-router-dom';
import navigateToRegex from '../../utils/navigateToRegex.js';
import { setPageAction } from '../../redux/actions/setPage.js';
import Card from '../../components/Card/Card.jsx';

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
        return navigate(`${id}/${newName}`)
    }


    useEffect(() => {
        dispatch(getShowes(API_ENDPOINTS.SHOWS))
    }, [dispatch])

    useEffect(() => {
        dispatch(setPageAction(sliced))
    }, [dispatch, sliced])
    return (
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
            <Pagination shows={shows} pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </div>
    );
};

export default Showes;