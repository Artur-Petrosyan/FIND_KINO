import {Col, Row} from "antd";
import React from "react";
import {Loader} from "src/core/ui";
import {Card} from "src/core/ui/components/Card";
import {Pagination} from "src/core/ui";
import './shows.scss'

export function ShowsPure(isLoading, sliced, data, pageNumber, setPageNumber) {
    return (
        <div className='content'>
            {isLoading ? <Loader/> :
                <>
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
                </>
            }
        </div>
    );
}