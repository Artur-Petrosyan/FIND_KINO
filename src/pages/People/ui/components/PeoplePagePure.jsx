import {Col, Row, Select} from "antd";
import {filtredByOption} from "src/utils/filtredByOption";
import Pagination from "src/components/Pagination/Pagination";
import {Card} from "src/core/ui/Card";
import Loader from "src/components/Loader/Loader";

export function PeoplePagePure({
                                   isLoading,
                                   selectOptions,
                                   data,
                                   setFiltredByGender,
                                   sliced,
                                   pageNumber,
                                   setPageNumber
                               }) {
    return (
        <div className='content'>
            {isLoading ? <Loader/> : <>
                <Select
                    options={selectOptions}
                    onChange={(gender) => filtredByOption(gender, data, setFiltredByGender)}
                    defaultValue='All Persons'
                />
                <Row gutter={20} wrap={true}>
                    {sliced.map(({id, image, name, rating}) =>
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
                <Pagination data={data} pageNumber={pageNumber} pageName='people' setPageNumber={setPageNumber}/>
            </>}
        </div>
    );
}