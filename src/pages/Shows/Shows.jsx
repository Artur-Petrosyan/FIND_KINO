import React from 'react';

import { GET_SHOWS } from '../../constants/types.js';
import { API_ENDPOINTS } from '../../constants/api.js';

import Pagination from '../../components/Pagination/Pagination';
import Card from '../../components/Card/Card.jsx';
import Loader from '../../components/Loader/Loader.jsx';

import useSlicedData from '../../hooks/useSlicedData.js';

import '../../styles/shows.scss'
import { useParams } from 'react-router-dom';

const Showes = () => {
    const { page } = useParams()
    const {
        setPageNumber,
        navigateWithRegex,
        sliced,
        data,
        pageNumber,
        isLoading
    } = useSlicedData(API_ENDPOINTS.SHOWS, 'shows', GET_SHOWS,page)


    return (
        <div className='content'>
            {isLoading ? <Loader /> :
                <>
                    <div className='shows'>
                        {sliced.map(({ id, image, name, rating }) =>
                            <Card
                                key={id}
                                id={id}
                                name={name}
                                image={image?.original}
                                navigateWithRegex={navigateWithRegex}
                                rating={rating?.average}
                            />
                        )}
                    </div>
              
                    <Pagination data={data} pageNumber={pageNumber} pageName='shows' setPageNumber={setPageNumber} />
                </>
            }
        </div>
    );
};

export default Showes;