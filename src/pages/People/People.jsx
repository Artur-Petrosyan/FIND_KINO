import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeoples } from "../../redux/actions/asyncGetPeoples";
import { API_ENDPOINTS } from "../../constants/api";
import Card from "../../components/Card/Card";
import { useNavigate, useParams } from "react-router-dom";
import { peoplesSelector } from "../../redux/selectors/peoples";
import sliceForPagination from "../../hooks/usePagination";
import { setPageAction } from "../../redux/actions/setPage";
import Pagination from "../../components/Pagination/Pagination";

const People = () => {
    const dispatch = useDispatch()


    const params = useParams()
    const navigate = useNavigate()

    const [pageNumber, setPageNumber] = useState(params.page)

    const peoples = useSelector(peoplesSelector)


    const sliced = useMemo(() => {
        return sliceForPagination(peoples, pageNumber)
    }, [pageNumber, peoples])

    useEffect(() => {
        dispatch(getPeoples(API_ENDPOINTS.PEOPLES))
    }, [dispatch])


    useEffect(() => {
        dispatch(setPageAction(sliced))
    }, [dispatch, sliced])
    return (
        <div className='content'>
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
            <Pagination data={peoples} pageNumber={pageNumber} pageName='people' setPageNumber={setPageNumber} />
        </div>
    );
};

export default People;