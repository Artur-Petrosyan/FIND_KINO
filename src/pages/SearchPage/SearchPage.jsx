import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { searchShowsSelector } from '../../redux/selectors/searchShows';
import getSearchShows from '../../redux/actions/asyncGetSearchShows';
import Card from '../../components/Card/Card';
import { Row, Col } from 'antd';
import '../../styles/searchPage.scss'
import Loader from '../../components/Loader/Loader';

const SearchPage = () => {
    const location = useLocation()
    const search = new URLSearchParams(location.search)
    const query = search.get('q')
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const searchShows = useSelector(searchShowsSelector)
    useEffect(() => {
        dispatch(getSearchShows(query, setIsLoading))
    }, [query, dispatch])
    return (
        <div>
            {searchShows ?
                <Row gutter={20} wrap={true}>
                    {isLoading ? <Loader /> :
                        searchShows.map(({ show }) => {
                            const { id, name, image, rating } = show
                            return (
                                <Col key={id} xl={3} lg={6} md={8} sm={12} xs={24} span={3} className='row__col'>
                                    <Card
                                        key={id}
                                        id={id}
                                        name={name}
                                        image={image?.original}
                                        rating={rating?.average}
                                    />
                                </Col>
                            )
                        }
                        )

                    }
                </Row>
                : <p>Not Items</p>}
        </div>
    );
};

export default SearchPage;