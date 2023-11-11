import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { searchShowsSelector } from '../../redux/selectors/searchShows';
import getSearchShows from '../../redux/actions/asyncGetSearchShows';
import Card from '../../components/Card/Card';
const SearchPage = () => {
    const location = useLocation()
    const search = new URLSearchParams(location.search)
    const query = search.get('q')
    const dispatch = useDispatch()
    const searchShows = useSelector(searchShowsSelector)
    useEffect(() => {
        dispatch(getSearchShows(query))
    }, [query, dispatch])
    return (
        <div>
            {searchShows ? searchShows.map(({ show }) => {
                const {id,name,image,rating} = show
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        image={image?.original}
                        // navigateWithRegex={navigateWithRegex}
                        rating={rating?.average}
                    />
                )
            }
            )
                : <p>Not Items</p>}
        </div>
    );
};

export default SearchPage;