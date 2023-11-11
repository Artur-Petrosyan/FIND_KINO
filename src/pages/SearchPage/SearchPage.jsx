import React from 'react';
import {useLocation} from 'react-router-dom'
const SearchPage = () => {
    const location = useLocation()
    const search = new URLSearchParams(location.search)
    const query = search.get('q')


    return (
        <div>

            
        </div>
    );
};

export default SearchPage;