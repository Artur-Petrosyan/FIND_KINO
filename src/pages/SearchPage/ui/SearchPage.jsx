import React from 'react';

import * as model from "../model";

import {SearchPagePure} from "./components/";

const SearchPage = () => {
    const {isLoading, navigate, searchShows} = model.useSearchPageViewModel();

    return <SearchPagePure searchShows={searchShows} isLoading={isLoading} navigate={navigate} />;
};

export default SearchPage;