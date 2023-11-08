import { API_ENDPOINTS } from "../../constants/api";
import Card from "../../components/Card/Card";

import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import useSlicedData from "../../hooks/useSlicedData";
import { GET_PEOPLES } from "../../constants/types";

const People = () => {
    const { setPageNumber, navigateWithRegex, sliced, data, pageNumber, isLoading } = useSlicedData(API_ENDPOINTS.PEOPLES, 'peoples', GET_PEOPLES)


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
                <Pagination data={data} pageNumber={pageNumber} pageName='people' setPageNumber={setPageNumber} />
            </>}
        </div>
    );
};

export default People;