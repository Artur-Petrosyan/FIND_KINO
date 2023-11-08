import React from 'react';


import Pagination from '../../components/Pagination/Pagination';
import Card from '../../components/Card/Card.jsx';

import '../../styles/shows.scss'
import useSlicedData from '../../hooks/useSlicedData.js';
import { API_ENDPOINTS } from '../../constants/api.js';
import { GET_SHOWS } from '../../constants/types.js';

const Showes = () => {
    const { setPageNumber, navigateWithRegex, sliced, data, pageNumber } = useSlicedData(API_ENDPOINTS.SHOWS, 'shows', GET_SHOWS)
    return (
        <div className='content'>
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
        </div>
    );
};

export default Showes;