import { API_ENDPOINTS } from "../../constants/api";
import { GET_PEOPLES } from "../../constants/types";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";

import useSlicedData from "../../hooks/useSlicedData";
import { useParams } from "react-router-dom";

const People = () => {
    const { page } = useParams()
    const {
        setPageNumber,
        navigateWithRegex,
        sliced,
        data,
        isLoading
    } = useSlicedData(API_ENDPOINTS.PEOPLES, 'peoples', GET_PEOPLES, page)

    return (
        <div className='content'>
            {isLoading ? <Loader /> : <>
                <div className='shows'>
                    {sliced.map(({ id, image, name, rating }) =>
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            image={image?.original}
                            rating={rating?.average}
                        />
                    )}
                </div>
                <Pagination data={data} pageNumber={page} pageName='people' setPageNumber={setPageNumber} />
            </>}
        </div>
    );
};

export default People;