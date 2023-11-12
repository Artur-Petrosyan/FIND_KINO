import { API_ENDPOINTS } from "../../constants/api";
import { GET_PEOPLES } from "../../constants/types";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import { Row, Col } from 'antd'
import useSlicedData from "../../hooks/useSlicedData";
import { useParams } from "react-router-dom";
const People = () => {
    const { page } = useParams()
    const {
        setPageNumber,
        sliced,
        data,
        pageNumber,
        isLoading
    } = useSlicedData(API_ENDPOINTS.PEOPLES, 'peoples', GET_PEOPLES, page)

    return (
        <div className='content'>
            {isLoading ? <Loader /> : <>
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
                <Pagination data={data} pageNumber={pageNumber} pageName='people' setPageNumber={setPageNumber} />
            </>}
        </div>
    );
};

export default People;