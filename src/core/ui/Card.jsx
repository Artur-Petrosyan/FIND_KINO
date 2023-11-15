import React from 'react';
import CardAnt from 'antd/es/card/Card';
import 'src/styles/card.scss'
import Meta from 'antd/es/card/Meta';
import { HeartOutlined, StarOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom';
import { navigateWithRegex } from 'src/utils/navigateWithRegex';
export const Card = ({ id, name, image, rating }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const path = location.pathname

    return (
        <CardAnt
            className='card'
            key={id}
            title={name}
            cover={image ? <img src={image} alt='img' className='card__image' /> : <span>Not image</span>}
            onClick={() => navigateWithRegex && navigateWithRegex(id, name, navigate,path)}
            size='small'
        >
            <Meta title={name} />
            <div className='card__icons'>
                <HeartOutlined className='card__heart' />
                <div className='card__rating-star'>
                    <StarOutlined className='card__star' />
                    <span className='card__rating'>{rating}</span>
                </div>
            </div>
        </CardAnt >
    );
};
