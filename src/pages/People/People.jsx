import { API_ENDPOINTS } from "src/constants/api";
import { GET_PEOPLES } from "src/constants/types";
import Card from "src/components//Card/Card";
import Pagination from "src/components//Pagination/Pagination";
import Loader from "src/components//Loader/Loader";
import { Row, Col, Select } from 'antd'
import useSlicedData from "src/hooks/useSlicedData";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { filtredByOption } from "src/utils/filtredByOption";
const People = () => {
    const { page } = useParams()
    const {
        setPageNumber,
        sliced,
        data,
        pageNumber,
        isLoading
    } = useSlicedData(API_ENDPOINTS.PEOPLES, 'peoples', GET_PEOPLES, page)

    const selectOptions = [
        { value: "All Persons", label: "All Persons" },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },

    ]

    const [filtredByGender, setFiltredByGender] = useState([])
    return (
        <div className='content'>
            {isLoading ? <Loader /> : <>
                <Select
                    options={selectOptions}
                    onChange={(gender) => filtredByOption(gender,data,setFiltredByGender) }
                    defaultValue='All Persons'
                />
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