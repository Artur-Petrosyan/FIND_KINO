import React from 'react';

import heart from '../../assets/icons/heart.svg'
import star from '../../assets/icons/star.svg'
import Card from 'antd/es/card/Card';
import '../../styles/card.scss'
import Meta from 'antd/es/card/Meta';

const _Card = ({ id, name, image, navigateWithRegex, rating }) => {
    return (
            <Card
            className='card'
                key={id}
                title={name}
                cover={<img src={image} alt='img' className='card__image'/>}
                onClick={() => navigateWithRegex && navigateWithRegex(id, name)}
                size='small'
            >
                <Meta title={name} />
            </Card >
    );
};

export default _Card;


{/* <div className="card">
{image && <img src={image} alt={name} className="card__image" onClick={() => navigateWithRegex && navigateWithRegex(id, name)} />}
<div className="card__name">
    <h3 onClick={() => navigateWithRegex && navigateWithRegex(id, name)}>{name}</h3>
</div>
<div className='card__footer'>
    <div className='card__footer-group-left'>
        <img src={heart} alt="heart" className='card__footer-icon' />
    </div>
    {rating && <div className='card__footer-group-right'>
        <img src={star} alt="star" className='card__footer-icon' />
        <p className='card__footer-rating'>{rating}</p>
    </div>}
</div>
</div> */}