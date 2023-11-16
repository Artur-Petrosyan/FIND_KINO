import React from "react";
import {Button, Col, Result, Row} from "antd";

import { Card } from "src/core";

import './SearchPagePure.scss'
import {Loader} from "src/core/ui/components/Loader";

export function SearchPagePure({searchShows, isLoading, navigate}) {
    return (
        <div>
            {searchShows.length ?
                <Row className='' gutter={20} wrap={true}>
                    {isLoading ? <Loader /> :
                        searchShows.map(({show}) => {
                                const {id, name, image, rating} = show
                                return (
                                    <Col
                                        key={id}
                                        xl={3}
                                        lg={6}
                                        md={8}
                                        sm={12}
                                        xs={24}
                                        span={3}
                                        className='row__col'
                                    >
                                        <Card
                                            key={id}
                                            id={id}
                                            name={name}
                                            image={image?.original}
                                            rating={rating?.average}
                                        />
                                    </Col>
                                )
                            }
                        )
                    }
                </Row>
                : <Result
                    subTitle="Sorry, show not found,please click on button 'Shows' for watching all shows."
                    extra={<Button className="ant_btn" onClick={() => navigate('/shows/1')}
                                   type="primary">Shows</Button>}
                />
            }
        </div>
    );
}