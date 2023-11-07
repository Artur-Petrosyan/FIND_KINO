import React from 'react';

import heart from '../../assets/icons/heart.svg'
import star from '../../assets/icons/star.svg'

import '../../styles/card.scss'

const Card = ({ id, name, image, navigateWithRegex, rating }) => {
    return (
        <div className="card">
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
        </div>
    );
};

export default Card;