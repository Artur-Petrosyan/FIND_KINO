import {Col, Row, Select} from "antd";
import {Pagination} from "src/core/ui";
import {Card} from "src/core/ui/components/Card/Card";
import {filtredByOption} from "src/pages/People/lib/filtredByOption";

export const PeoplePagePure = ({
                                   selectOptions,
                                   data,
                                   setFiltredByGender,
                                   sliced,
                                   pageNumber,
                                   setPageNumber
                               }) => (
    <div className='content'>
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
    </div>
);