import {Col, Row} from "antd";
import React from "react";
import {Card} from "src/core/ui/components/Card/Card";
import {Pagination} from "src/core/ui/components";
import './shows.scss'

export const ShowsPure = ({setPageNumber, sliced, data, pageNumber}) => (
    <div className='content'>
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

                <Pagination data={data} pageNumber={pageNumber} pageName='shows' setPageNumber={setPageNumber}/>
    </div>
);