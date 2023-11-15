import React from 'react';

import { GET_SHOWS } from 'src/constants/types.js';
import { API_ENDPOINTS } from 'src/constants/api.js';

import Pagination from 'src/components//Pagination/Pagination';
import Card from 'src/components//Card/Card.jsx';
import Loader from 'src/components//Loader/Loader.jsx';

import useSlicedData from 'src/hooks/useSlicedData.js';

import 'src/styles/shows.scss'
import { useParams } from 'react-router-dom';
import { Row, Col } from 'antd'

const Showes = () => {
    const { page } = useParams()
    const {
        setPageNumber,
        sliced,
        data,
        pageNumber,
        isLoading
    } = useSlicedData(API_ENDPOINTS.SHOWS, 'shows', GET_SHOWS, page)


    return (
        <div className='content'>
            {isLoading ? <Loader /> :
                <>
                    <Row gutter={20} wrap={true}>
                        {sliced.map(({ id, image, name, rating }) =>
                            <Col key={id} xl={3} lg={6} md={8} sm={12} xs={24} span={3} className='row__col'>
                                <Card
                                    key={id}
                                    id={id}
                                    name={name}
                                    image={image?.original}
                                    rating={rating?.average}
                                />
                            </Col>
                        )}
                    </Row>

                    <Pagination data={data} pageNumber={pageNumber} pageName='shows' setPageNumber={setPageNumber} />
                </>
            }
        </div>
    );
};

export default Showes;